// Botón de login con autenticación básica
document.getElementById('login-btn').addEventListener('click', () => {
    const username = prompt("Usuario:");
    const password = prompt("Contraseña:");

    if (username === "admin" && password === "1234") { // Cambiar en producción
        alert("Bienvenido, DichosoPoeta");
        document.getElementById('publish-section').classList.remove('hidden');
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Publicar nuevos escritos
document.getElementById('publish-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const post = document.createElement('article');
        post.classList.add('bg-gray-900', 'p-6', 'rounded-lg', 'shadow-lg');
        post.innerHTML = `
            <h3 class="text-lg font-semibold">${title}</h3>
            <p class="mt-4 text-gray-400">${content}</p>
        `;
        document.getElementById('posts-container').appendChild(post);
        alert("Escrito publicado.");
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Enviar mensajes de contacto
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Tu mensaje ha sido enviado. ¡Gracias por contactarme!");
});
