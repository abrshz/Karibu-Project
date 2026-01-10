// Toggle between Login and Signup forms
function toggleForm() {
  const loginForm = document.getElementById("login-form");
  loginForm.classList.toggle("hidden");
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const roleSelect = document.getElementById("login-role");
  const branchGroup = document.querySelector(".branch-group");
  const branchSelect = document.getElementById("login-branch");

  // Show branch selector only for Manager or Sales Agent
  roleSelect.addEventListener("change", () => {
    if (roleSelect.value === "manager" || roleSelect.value === "sales_agent") {
      branchGroup.classList.remove("hidden");
    } else {
      branchGroup.classList.add("hidden");
      branchSelect.value = ""; // reset branch
    }
  });

  // Handle login button click
  loginBtn.addEventListener("click", function () {
    // 1. Capture the values
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const role = roleSelect.value;
    const branch = branchSelect.value;

    // 2. Validation checks
    if (!username || !password || !role) {
      alert("Please fill in all required fields.");
      return;
    }
    if ((role === "manager" || role === "sales_agent") && !branch) {
      alert("Please select a branch.");
      return;
    }

    // 3. Simulate login check
    console.log("Attempting login with:", { username, role, branch });

    // Example hardcoded check (replace with real backend call)
    if (username === "director@karibu.com" && password === "director123" && role === "director") {
      alert("Login Successful! Welcome Director.");
      window.location.href = "../Pages/dashboard.html";
    } else if (role === "manager") {
      alert(`Login Successful! Welcome Manager (${branch}).`);
      window.location.href = "../Pages/dashboard.html";
    } else if (role === "sales_agent") {
      alert(`Login Successful! Welcome Sales Agent (${branch}).`);
      window.location.href = "../Pages/dashboard.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
});