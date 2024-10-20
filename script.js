// Toggle the search bar when "Search" is clicked
const searchTrigger = document.getElementById("search-trigger");
const searchBar = document.getElementById("search-bar");

searchTrigger.addEventListener("click", function (event) {
  event.preventDefault();
  if (searchBar.style.display === "none" || searchBar.style.display === "") {
    searchBar.style.display = "block";
  } else {
    searchBar.style.display = "none";
  }
});
// login form
function showLogin() {
  document.getElementById("login").style.display = "flex";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    alert("Login successful!");
    document.getElementById("login").style.display = "none";
  } else {
    alert("Invalid login details.");
  }
}

window.onclick = function (event) {
  if (event.target == document.getElementById("login")) {
    document.getElementById("login").style.display = "none";
  }
};

// Get the modal, login button, and close button
const modal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the login button, show the modal
loginBtn.onclick = function () {
  modal.style.display = "flex"; // Show modal (flex for centering)
};

// When the user clicks on the close button, hide the modal
closeBtn.onclick = function () {
  modal.style.display = "none"; // Hide modal
};

// When the user clicks anywhere outside the modal content, hide the modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide modal if clicked outside
  }
};

//  login form new
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.textContent = type === "password" ? "👁️" : "🙈";
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const captchaInput = document.getElementById("captcha").value;
    const captchaSolution = 7 * 7;

    if (parseInt(captchaInput) === captchaSolution) {
      alert("Login successful!");
      // Add login functionality here
    } else {
      alert("Incorrect captcha! Please try again.");
    }
  });

// Refresh button logic (can be expanded with real CAPTCHA generation)
document
  .querySelector(".refresh-captcha")
  .addEventListener("click", function () {
    alert("Captcha refreshed! (Add your CAPTCHA generation logic here)");
  });
