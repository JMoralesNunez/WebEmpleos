import { USER_API } from "./apiurls.js";

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
        } else if (user && user.rol === "company") {
            localStorage.setItem("auth", "true")
            localStorage.setItem("userInfo", JSON.stringify({ id: user.id, name: user.name }))
            localStorage.setItem("userType", "company")  
            dashboard.classList.remove("d-none")   
            closeLogin()      
        } else {
            alert("Usuario incorrecto")
        }
    } else {
        alert("Rellena los campos")
    }
}

export function openLogin() {
    loginContent.classList.remove("d-none")
    dashboard.classList.add("d-none")
}

function closeLogin() {
    loginContent.classList.add("d-none")
    dashboard.classList.remove("d-none")
}