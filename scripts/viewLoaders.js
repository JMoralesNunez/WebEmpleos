export function loadPage() {
    const isAuth = localStorage.getItem("auth");
    const userType = localStorage.getItem("userType")
    if (isAuth != "true") {
        return
        // const loginContent = document.getElementById("loginContent");
        // loginContent.classList.remove("d-none")
        // const dashboard = document.getElementById("dashboard");
        // dashboard.classList.add("d-none")
    } else if (isAuth == "true" && userType == "user") {        
        const navBar = document.querySelector(".navbar-nav");
        const userID = localStorage.getItem("userInfo").id
        navBar.innerHTML = `<li class="nav-item">
                                <button onclick="showProfile(${userID})" class="btn">Perfil</button>
                            </li>
                            <li class="nav-item">
                                <button onclick="showApplication(${userID})" class="btn">Mis Aplicaciones</button>
                            </li>`
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
                            </li>`
    }
}