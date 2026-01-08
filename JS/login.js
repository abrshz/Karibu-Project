function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  // Simple "mount/unmount" logic using class toggling
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");

  loginBtn.addEventListener("click", function () {
    // 1. Capture the values
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // 2. Simple validation check
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // 3. Simulate an account check
    // In a real project, you'd send this to a server via fetch()
    console.log("Attempting login with:", email);

    if (email === "user@example.com" && password === "password123") {
      alert("Login Successful! Welcome back to FreshCart.");
      // Redirect to home page:
      window.location.href = "../Pages/dashboard.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});

function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  // Simple "mount/unmount" logic using class toggling
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");

  loginBtn.addEventListener("click", function () {
    // 1. Capture the values
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // 2. Simple validation check
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // 3. Simulate an account check
    // In a real project, you'd send this to a server via fetch()
    console.log("Attempting login with:", email);

    if (email === "user@example.com" && password === "password123") {
      alert("Login Successful! Welcome back to FreshCart.");
      // Redirect to home page:
      window.location.href = "../Pages/dashboard.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});

// Your existing toggle function
function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
};
