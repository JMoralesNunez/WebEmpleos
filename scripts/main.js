import { login, logout, openLogin, closeLogin} from "./login.js";
import { register, registerView } from "./register.js";
import { loadPage } from "./viewLoaders.js";
import { showProfile } from "./profile.js";



document.addEventListener("DOMContentLoaded", loadPage)

document.getElementById("loginForm").addEventListener("submit", login)

document.getElementById("registerForm").addEventListener("submit", register)

// document.getElementById("openLogin").addEventListener("click", openLogin)


document.querySelector(".navbar-nav").addEventListener("click", (e) => {
    if (e.target.matches("#openLogin")) openLogin();
    if (e.target.matches("#logoutBtn")) logout();
    if (e.target.matches("#openRegister")) registerView.openRegister();
    if (e.target.matches("#showProfileBtn")) showProfile();
});

document.getElementById("cancelBtn").addEventListener("click", closeLogin)

document.getElementById("cancelRegBtn").addEventListener("click", registerView.closeRegister)

