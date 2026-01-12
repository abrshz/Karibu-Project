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

form.addEventListener('submit', (event) => {
    const cost = parseFloat(document.getElementById('cost').value);
    const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);

    if (sellingPrice < cost) {
        alert("Error: Selling price cannot be less than the procurement cost!");
        event.preventDefault();
        return;
    }
    
    // Existing validation logic...
});
