// script.js
// Wait for DOM to load before binding events
document.addEventListener('DOMContentLoaded', function () {
  // Example interactions for header buttons
  const signupBtn = document.querySelector('.btn.signup');
  const loginBtn = document.querySelector('.btn.login');
  const primaryBtn = document.querySelector('.btn.primary');

  if (signupBtn) {
    signupBtn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Sign Up action triggered!');
    });
  }
  if (loginBtn) {
    loginBtn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Login action triggered!');
    });
  }
  if (primaryBtn) {
    primaryBtn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Get Started clicked!');
    });
  }
});
