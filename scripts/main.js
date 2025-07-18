import { login, logout, openLogin } from "./login.js";
import { loadPage } from "./viewLoaders.js";

document.addEventListener("DOMContentLoaded", loadPage)

document.getElementById("loginForm").addEventListener("submit", login)

// document.getElementById("openLogin").addEventListener("click", openLogin)


document.querySelector(".navbar-nav").addEventListener("click", (e) => {
    if (e.target.matches("#openLogin"))   openLogin();
    if (e.target.matches("#logoutBtn")) logout();
    if (e.target.matches("#logoutBtn"))  logout();
});
