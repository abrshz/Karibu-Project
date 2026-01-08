// Simple Bootstrap Validation Trigger
const form = document.getElementById('procurementForm');
form.addEventListener(
  'submit',
  (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  },
  false
);
