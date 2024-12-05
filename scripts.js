// script.js

// Cambiar entre modo claro y oscuro
document.getElementById("toggleTheme")?.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Simulación de login (Este código es solo para demostración)
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aquí puedes agregar la validación de usuario/contraseña real
    if (username === "admin" && password === "1234") {
        window.location.href = "admin.html"; // Redirige al admin
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Función para añadir un nuevo poema (solo admin)
document.getElementById("addPostForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const poem = {
        title: title,
        content: content,
        date: new Date().toLocaleString(),
    };

    // Agregar el poema a la lista (esto es solo un ejemplo simple sin backend)
    const poemsContainer = document.getElementById("poemsContainer");

    const poemElement = document.createElement("div");
    poemElement.classList.add("poem");

    poemElement.innerHTML = `
        <h3>${poem.title}</h3>
        <p>${poem.content}</p>
        <small>Publicado el: ${poem.date}</small>
    `;

    poemsContainer.appendChild(poemElement);

    // Limpiar el formulario después de añadir un poema
    document.getElementById("addPostForm").reset();
});
