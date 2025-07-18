import { login, logout, openLogin, closeLogin} from "./login.js";
import { register, registerView } from "./register.js";
import { loadPage } from "./viewLoaders.js";


document.addEventListener("DOMContentLoaded", loadPage)

document.getElementById("loginForm").addEventListener("submit", login)

document.getElementById("registerForm").addEventListener("submit", register)

// document.getElementById("openLogin").addEventListener("click", openLogin)


document.querySelector(".navbar-nav").addEventListener("click", (e) => {
    if (e.target.matches("#openLogin")) openLogin();
    if (e.target.matches("#logoutBtn")) logout();
    if (e.target.matches("#openRegister")) registerView.openRegister();
});

document.getElementById("cancelBtn").addEventListener("click", closeLogin)

document.getElementById("cancelRegBtn").addEventListener("click", registerView.closeRegister)

