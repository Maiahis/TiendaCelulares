document.addEventListener("DOMContentLoaded", () =>  {
    const form = document.getElementById("miFormulario");
    const mensajeGracias = document.getElementById("mensajeGracias");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Evita el envío del formulario
            // Aquí puedes agregar validaciones o enviar los datos a un servidor si es necesario
            form.style.display = "none";
            mensajeGracias.style.display = "block"; // Muestra el mensaje de agradecimiento
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("miFormulario");
    const mensajeGracias = document.getElementById("mensajeGracias");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // evita recargar la página

            // Validación simple: que los campos no estén vacíos
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre && email && mensaje) {
                // Mostrar mensaje de agradecimiento
                mensajeGracias.textContent = "¡Gracias por guardar sus datos! Nos estaremos contactando pronto.";
                mensajeGracias.classList.remove("d-none");
                mensajeGracias.classList.add("alert-success");

                // Opcional: limpiar el formulario
                form.reset();

            } else {
                // Mostrar error si faltan campos
                mensajeGracias.textContent = "⚠️ Campos incompletos, por favor revise.";
                mensajeGracias.classList.remove("d-none");
                mensajeGracias.classList.add("alert-danger");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const categoriaLink = document.getElementById("categoriaDropdown");

    if (categoriaLink) {
        categoriaLink.addEventListener("click", function (e) {
            e.preventDefault(); // evita que el click normal bloquee
            // Redirige a la página de categoría
            window.location.href = "categoria.html";

            // Cuando cargue categoria.html, abre el menú desplegable automáticamente
            sessionStorage.setItem("abrirDropdown", "true");
        });
    }

    // En categoria.html: si venís de Inicio, abre el menú
    if (window.location.pathname.includes("categoria.html")) {
        if (sessionStorage.getItem("abrirDropdown") === "true") {
            const categoriaDropdown = document.getElementById("categoriaDropdown");
            if (categoriaDropdown) {
                const dropdown = new bootstrap.Dropdown(categoriaDropdown);
                dropdown.show();
            }
            sessionStorage.removeItem("abrirDropdown");
        }
    }
});


