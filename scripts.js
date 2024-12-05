// script.js

// Cambiar entre modo claro y oscuro
const toggleThemeButton = document.getElementById("toggleTheme");
if (toggleThemeButton) {
    toggleThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Guardar la preferencia del usuario
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Aplicar el tema almacenado si existe
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Simulación de login (Este código es solo para demostración)
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("adminSection").style.display = "block";
        document.getElementById("poemsSection").style.display = "block";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Cargar poemas del almacenamiento local
function loadPoems() {
    const poems = JSON.parse(localStorage.getItem("poems")) || [];
    const poemsContainer = document.getElementById("poemsContainer");
    
    poemsContainer.innerHTML = ""; // Limpiar antes de agregar nuevos

    poems.forEach(poem => {
        const poemElement = document.createElement("div");
        poemElement.classList.add("poem");
        poemElement.innerHTML = `
            <h3>${poem.title}</h3>
            <p>${poem.content}</p>
            <small>Publicado el: ${poem.date}</small>
        `;
        poemsContainer.appendChild(poemElement);
    });
}

// Añadir un nuevo poema al almacenamiento local
document.getElementById("addPostForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const poem = {
        title: title,
        content: content,
        date: new Date().toLocaleString(),
    };

    // Obtener poemas del almacenamiento local
    const poems = JSON.parse(localStorage.getItem("poems")) || [];
    
    // Agregar el nuevo poema a la lista
    poems.push(poem);

    // Guardar la lista de poemas actualizada en el almacenamiento local
    localStorage.setItem("poems", JSON.stringify(poems));

    // Cargar los poemas actualizados
    loadPoems();

    // Limpiar el formulario después de añadir un poema
    document.getElementById("addPostForm").reset();
});

// Cargar los poemas cuando la página de administración se cargue
window.onload = loadPoems;
