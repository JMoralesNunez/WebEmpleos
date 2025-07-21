import { USER_API } from "./apiurls.js";

export async function showProfile() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userType = localStorage.getItem("userType");

    const res = await fetch(USER_API + userInfo.id);
    const user = await res.json();

    // Mostrar formulario
    document.getElementById("dashboard").classList.add("d-none");
    document.getElementById("loginContent").classList.add("d-none");
    document.getElementById("registerContent").classList.add("d-none");
    document.getElementById("profileContent").classList.remove("d-none");

    // Rellenar campos comunes
    document.getElementById("profileName").value = user.name;
    document.getElementById("profileEmail").value = user.email;
    document.getElementById("profilePassword").value = user.password;

    // Mostrar campos extra según tipo
    if (userType === "user") {
        document.getElementById("userExtraFields").classList.remove("d-none");
        document.getElementById("companyExtraFields").classList.add("d-none");
        document.getElementById("profileSkills").value = user.skills?.join(", ") || "";
        document.getElementById("profileExperience").value = user.experience?.join("\n") || "";
    } else {
        document.getElementById("companyExtraFields").classList.remove("d-none");
        document.getElementById("userExtraFields").classList.add("d-none");
        document.getElementById("profileLogo").value = user.logo || "";
        document.getElementById("profileField").value = user.field || "";
        document.getElementById("profileDescription").value = user.description || "";
    }

    // Guardar cambios
    document.getElementById("profileForm").onsubmit = async (e) => {
        e.preventDefault();

        const updated = {
            name: document.getElementById("profileName").value,
            email: document.getElementById("profileEmail").value,
            password: document.getElementById("profilePassword").value,
            rol : userType,
        };

        if (userType === "user") {
            updated.skills = document.getElementById("profileSkills").value.split(",").map(s => s.trim());
            updated.experience = document.getElementById("profileExperience").value.split("\n").map(e => e.trim());
        } else {
            updated.logo = document.getElementById("profileLogo").value;
            updated.field = document.getElementById("profileField").value;
            updated.description = document.getElementById("profileDescription").value;
        }

        await fetch(USER_API + userInfo.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated)
        });

        alert("Perfil actualizado correctamente");
        document.getElementById("profileContent").classList.add("d-none");
        document.getElementById("dashboard").classList.remove("d-none");
    };

    // Cancelar edición
    document.getElementById("cancelProfileBtn").onclick = () => {
        document.getElementById("profileContent").classList.add("d-none");
        document.getElementById("dashboard").classList.remove("d-none");
    };
}
