const form = document.getElementById('contactForm');
const statusText = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Normally you would send data to a server here
  statusText.textContent = 'Sending...';

  setTimeout(() => {
    statusText.textContent = 'Message sent! We will get back to you soon.';
    form.reset();
  }, 1000); // Simulated delay
});
