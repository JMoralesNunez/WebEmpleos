import { USER_API } from "./apiurls";


async function login() {
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
        } else if (user && user.rol === "company") {
            localStorage.setItem("auth", "true")
            localStorage.setItem("userInfo", JSON.stringify({ id: user.id, name: user.name }))
            localStorage.setItem("userType", "company")
        } else {
            alert("Usuario incorrecto")
        }
    } else {
        alert("Rellena los campos")
    }
}