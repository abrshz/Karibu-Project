document.getElementById("salesForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const isAlphaNumeric = (str) => /^[a-z0-9 ]+$/i.test(str);

  const produce = document.getElementById("produceName");
  const tonnage = document.getElementById("tonnage");
  const amount = document.getElementById("amountPaid");
  const buyer = document.getElementById("buyerName");
  const agent = document.getElementById("agentName");
  const dateTime = document.getElementById("saleDateTime");

  // --- Validation (same as before) ---
  if (produce.value === "") { showError(produce, "produceError"); isValid = false; } else { hideError(produce, "produceError"); }
  if (tonnage.value <= 0) { showError(tonnage, "tonnageError"); isValid = false; } else { hideError(tonnage, "tonnageError"); }
  if (amount.value.trim().length < 5) { showError(amount, "amountError"); isValid = false; } else { hideError(amount, "amountError"); }
  if (buyer.value.trim().length < 2 || !isAlphaNumeric(buyer.value)) { showError(buyer, "buyerError"); isValid = false; } else { hideError(buyer, "buyerError"); }
  if (agent.value.trim().length < 2 || !isAlphaNumeric(agent.value)) { showError(agent, "agentError"); isValid = false; } else { hideError(agent, "agentError"); }
  if (dateTime.value === "") { showError(dateTime, "dateError"); isValid = false; } else { hideError(dateTime, "dateError"); }

  if (isValid) {
    // --- Save record to localStorage ---
    const saleRecord = {
      produce: produce.value,
      tonnage: tonnage.value,
      amountPaid: amount.value,
      buyerName: buyer.value,
      agentName: agent.value,
      saleDateTime: dateTime.value
    };

    // Get existing records or empty array
    let sales = JSON.parse(localStorage.getItem("salesRecords")) || [];
    sales.push(saleRecord);

    // Save back to localStorage
    localStorage.setItem("salesRecords", JSON.stringify(sales));

    alert("✅ Success! Sales record for " + produce.value + " has been saved.");
    this.reset();
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

// 7. Payment Method Validation
const payment = document.getElementById("paymentMethod");
if (payment.value === "") {
  showError(payment, "paymentError");
  isValid = false;
} else {
  hideError(payment, "paymentError");
}


// Generate Invoice Number when page loads
window.addEventListener("DOMContentLoaded", () => {
  const invoiceField = document.getElementById("invoiceNumber");
  if (invoiceField) {
    const now = new Date();
    const uniqueNumber =
      "INV-" +
      now.getFullYear().toString().slice(-2) + // YY
      (now.getMonth() + 1).toString().padStart(2, "0") + // MM
      now.getDate().toString().padStart(2, "0") + // DD
      "-" +
      Math.floor(Math.random() * 9000 + 1000); // Random 4 digits
    invoiceField.value = uniqueNumber;
  }
});
