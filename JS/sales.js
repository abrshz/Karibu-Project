document.getElementById("salesForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Validation flags
  let isValid = true;

  // Helper function for Alpha-numeric check
  const isAlphaNumeric = (str) => /^[a-z0-9 ]+$/i.test(str);

  // 1. Produce Name Validation
  const produce = document.getElementById("produceName");
  if (produce.value === "") {
    showError(produce, "produceError");
    isValid = false;
  } else {
    hideError(produce, "produceError");
  }

  // 2. Tonnage Validation
  const tonnage = document.getElementById("tonnage");
  if (tonnage.value <= 0) {
    showError(tonnage, "tonnageError");
    isValid = false;
  } else {
    hideError(tonnage, "tonnageError");
  }

  // 3. Amount Paid Validation (Not empty, >= 5 chars)
  const amount = document.getElementById("amountPaid");
  if (amount.value.trim().length < 5) {
    showError(amount, "amountError");
    isValid = false;
  } else {
    hideError(amount, "amountError");
  }

  // 4. Buyer's Name (Alpha-numeric, >= 2 chars)
  const buyer = document.getElementById("buyerName");
  if (buyer.value.trim().length < 2 || !isAlphaNumeric(buyer.value)) {
    showError(buyer, "buyerError");
    isValid = false;
  } else {
    hideError(buyer, "buyerError");
  }

  // 5. Agent Name (Alpha-numeric, >= 2 chars)
  const agent = document.getElementById("agentName");
  if (agent.value.trim().length < 2 || !isAlphaNumeric(agent.value)) {
    showError(agent, "agentError");
    isValid = false;
  } else {
    hideError(agent, "agentError");
  }

  // 6. Date/Time Validation
  const dateTime = document.getElementById("saleDateTime");
  if (dateTime.value === "") {
    showError(dateTime, "dateError");
    isValid = false;
  } else {
    hideError(dateTime, "dateError");
  }

  if (isValid) {
    alert("Success! Sales record for " + produce.value + " has been saved.");
    this.reset(); // Clear form
  }
});

function showError(input, errorId) {
  input.classList.add("is-invalid");
  document.getElementById(errorId).style.display = "block";
}

function hideError(input, errorId) {
  input.classList.remove("is-invalid");
  document.getElementById(errorId).style.display = "none";
}



