import { USER_API } from "./apiurls.js";
import { loadPage } from "./viewLoaders.js";


const dashboard = document.getElementById("dashboard");
const loginContent = document.getElementById("loginContent")

export async function login(e) {
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        const res = await fetch(USER_API)
        const data = await res.json();
        const user = data.find(user => user.email === email && user.password === password);
        if (user && user.rol === "user") {
            localStorage.setItem("auth", "true")
            localStorage.setItem("userInfo", JSON.stringify({ id: user.id, name: user.name }))
            localStorage.setItem("userType", "user")
            dashboard.classList.remove("d-none")
            closeLogin()
            loadPage()
        } else if (user && user.rol === "company") {
            localStorage.setItem("auth", "true")
            localStorage.setItem("userInfo", JSON.stringify({ id: user.id, name: user.name }))
            localStorage.setItem("userType", "company")
            dashboard.classList.remove("d-none")
            closeLogin()
            loadPage()
        } else {
            alert("Usuario incorrecto")
        }
    } else {
        alert("Rellena los campos")
    }
}

export function logout() {
    localStorage.removeItem("auth")
    localStorage.removeItem("userInfo")
    localStorage.removeItem("userType")
    document.getElementById("dashboard").classList.remove("d-none");
    document.getElementById("loginContent").classList.add("d-none");
    const navBar = document.querySelector(".navbar-nav");
    navBar.innerHTML = `<li class="nav-item">
                            <button id="openLogin" class="btn btn-dark" aria-current="page">Login</button>
                        </li>
                        <li class="nav-item">
                            <button id="openRegister" class="btn btn-success" aria-current="page">Regístrate</button>
                        </li>`
}

export function openLogin() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    loginContent.classList.remove("d-none")
    document.getElementById("registerContent").classList.add("d-none");
    dashboard.classList.add("d-none")
}

export function closeLogin() {
    loginContent.classList.add("d-none")
    dashboard.classList.remove("d-none")
}