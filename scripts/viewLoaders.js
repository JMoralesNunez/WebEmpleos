function loadPage() {
    const userID = localStorage.getItem("userInfo").id
    if (localStorage.getItem("auth") != "true") {
        const loginContent = document.getElementById("loginContent");
        loginContent.classList.remove("d-none")
    } else if (localStorage.getItem("auth") == "true" && localStorage.getItem("userType") == "user") {
        const dashboard = document.getElementById("dashboard");
        const navBar = document.querySelector(".navbar-nav");
        navBar.innerHTML = `<li class="nav-item">
                                <button onclick="" class="btn">Perfil</button>
                            </li>
                            <li class="nav-item">
                                <button class="btn">Mis Solicitudes</button>
                            </li>`

    }
}