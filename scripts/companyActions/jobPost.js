import { JOB_API, USER_API } from "../apiurls.js";

// Mostrar el formulario de publicación
export function openJobForm() {
    document.getElementById("dashboard").classList.add("d-none");
    document.getElementById("profileContent").classList.add("d-none");
    document.getElementById("jobPostContent").classList.remove("d-none");

    // Limpiar campos
    document.getElementById("jobPostForm").reset();
}

// Registrar listeners del formulario
export function setupJobForm() {
    const form = document.getElementById("jobPostForm");
    const cancelBtn = document.getElementById("cancelJobPostBtn");

    // Publicar oferta
    form.onsubmit = async (e) => {
        e.preventDefault();

        const title = document.getElementById("jobTitleInput").value.trim();
        const description = document.getElementById("jobDescriptionInput").value.trim();
        const requisites = document.getElementById("jobRequisitesInput").value.trim();
        const salary = document.getElementById("jobSalaryInput").value.trim();
        const mode = document.getElementById("jobModeInput").value;

        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const companyId = userInfo.id;

        // 1. Crear oferta
        const newJob = {
            title,
            description,
            requisites,
            salary,
            mode,
            companyId,
            applicants: []
        };

        const jobRes = await fetch(JOB_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newJob)
        });

        const createdJob = await jobRes.json();

        // 2. Asociar oferta a la empresa
        const userRes = await fetch(USER_API + companyId);
        const company = await userRes.json();

        if (!company.jobOffers) {
            company.jobOffers = [];
        }

        company.jobOffers.push(createdJob.id);

        await fetch(USER_API + companyId, {
            method: "PATCH", // ✅ sólo actualiza jobOffers
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ jobOffers: company.jobOffers })
        });

        alert("Oferta publicada correctamente.");

        // Volver al dashboard
        document.getElementById("jobPostContent").classList.add("d-none");
        document.getElementById("dashboard").classList.remove("d-none");
    };

    // Cancelar publicación
    cancelBtn.onclick = () => {
        document.getElementById("jobPostContent").classList.add("d-none");
        document.getElementById("dashboard").classList.remove("d-none");
    };
}
