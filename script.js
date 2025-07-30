function scrollToForm() {
  document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

function submitForm() {
  alert('Thank you for subscribing to SuperMailer!');
  return false; // Stop real submission for demo
}
