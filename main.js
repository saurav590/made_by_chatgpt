document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorMessage = document.getElementById('error-message');
  
  // Clear any previous error messages
  errorMessage.textContent = '';

  // Validation check
  if (!name || !email || !phone || !message) {
    errorMessage.textContent = 'All fields are required!';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  const phonePattern = /^\+?[0-9]{1,4}?[0-9]{6,10}$/;
  if (!phonePattern.test(phone)) {
    errorMessage.textContent = 'Please enter a valid phone number.';
    return;
  }

  // If everything is valid, simulate successful form submission
  alert('Form submitted successfully!');
  document.getElementById('contact-form').reset();
});
