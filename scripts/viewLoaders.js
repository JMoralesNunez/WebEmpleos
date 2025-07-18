import { logout } from "./login.js";

export function loadPage() {
    const isAuth = localStorage.getItem("auth");
    const userType = localStorage.getItem("userType")
    if (isAuth != "true") return

    if (isAuth == "true" && userType == "user") {        
        const navBar = document.querySelector(".navbar-nav");
        const userID = localStorage.getItem("userInfo").id
        navBar.innerHTML = `<li class="nav-item">
                                <button onclick="showProfile(${userID})" class="btn">Perfil</button>
                            </li>
                            <li class="nav-item">
                                <button onclick="showApplication(${userID})" class="btn">Mis Aplicaciones</button>
                            </li>
                            <li class="nav-item">
                                <button id="logoutBtn" class="btn btn-outline-danger">Salir</button>
                            </li>`
                            document.getElementById("logoutBtn").addEventListener("click", function() {
                                logout()
                                loadPage()
                            });
    } else if (isAuth == "true" && userType == "company") {
        const navBar = document.querySelector(".navbar-nav");
        const userID = localStorage.getItem("userInfo").id
        navBar.innerHTML = `<li class="nav-item">
                                <button onclick="showProfile(${userID})" class="btn">Perfil</button>
                            </li>
                            <li class="nav-item">
                                <button onclick="showJobOffers(${userID})" class="btn">Publicar oferta</button>
                            </li>
                            <li class="nav-item">
                                <button onclick="showApplicants(${userID})" class="btn">Postulantes</button>
                            </li>
                            <li class="nav-item">
                                <button id="logoutBtn" class="btn btn-outline-danger">Salir</button>
                            </li>`
                            document.getElementById("logoutBtn").addEventListener("click", function() {
                                logout()
                                loadPage()
                            });
    }
    document.getElementById("logoutBtn").addEventListener("click", logout);
}
