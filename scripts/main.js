import { login, openLogin } from "./login.js";
import { loadPage } from "./viewLoaders.js";

document.addEventListener("DOMContentLoaded", loadPage)

document.getElementById("loginForm").addEventListener("submit", login)

document.getElementById("openLogin").addEventListener("click", openLogin)



