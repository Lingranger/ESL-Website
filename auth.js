document.getElementById('signupForm')?.addEventListener('submit', e => {
  e.preventDefault();

  const password = e.target.password.value;
  const confirmPassword = e.target.confirmPassword.value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Do other checks here...

  alert("Registered! Now you can login.");
  window.location.href = "login.html";
});
