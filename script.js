// Manejo del login con autenticación básica (Solo para demostración)
// ⚠️ No uses credenciales fijas ni este enfoque en producción.
document.getElementById('login-btn').addEventListener('click', () => {
    const username = prompt("Usuario:");
    const password = prompt("Contraseña:");

    // Validar credenciales (Cambiar este enfoque en producción)
    if (username === "admin" && password === "1234") {
        alert("Bienvenido, DichosoPoeta");
        document.getElementById('publish-section').classList.remove('hidden');
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Manejo de publicación de nuevos escritos
document.getElementById('publish-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
        agregarEscrito(title, content);
        alert("Escrito publicado.");
        // Limpiar los campos del formulario
        titleInput.value = '';
        contentInput.value = '';
    } else {
        alert("Por favor, completa todos los campos antes de publicar.");
    }
});

/**
 * Agrega un nuevo escrito al contenedor de publicaciones.
 * @param {string} title - Título del escrito.
 * @param {string} content - Contenido del escrito.
 */
function agregarEscrito(title, content) {
    const postContainer = document.getElementById('posts-container');
    const post = document.createElement('article');
    post.classList.add('bg-gray-900', 'p-6', 'rounded-lg', 'shadow-lg');
    post.innerHTML = `
        <h3 class="text-lg font-semibold">${title}</h3>
        <p class="mt-4 text-gray-400">${content}</p>
    `;
    postContainer.appendChild(post);
}

// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    alert("Tu mensaje ha sido enviado. ¡Gracias por contactarme!");

    // Opcional: limpiar el formulario
    e.target.reset();
});
