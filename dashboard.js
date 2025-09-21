// dashboard.js

const user = JSON.parse(localStorage.getItem("eslUser"));
if (!user) {
  window.location.href = "login.html"; // Not logged in
}

document.getElementById("userName").textContent = user.name;

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("eslUser");
  window.location.href = "index.html";
});
