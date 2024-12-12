// Ejemplo de datos de los escritos
const escritos = [
    { titulo: "Primavera en el alma", contenido: "Un poema sobre la renovación y la esperanza." },
    { titulo: "El ocaso de un sueño", contenido: "Reflexiones sobre la pérdida y la nostalgia." },
    { titulo: "Caminos inciertos", contenido: "Una historia sobre elecciones y consecuencias." },
    // Agrega tantos como desees
];

// Contenedor de los posts
const postsContainer = document.getElementById('posts-container');

// Generar posts dinámicamente
escritos.forEach(escrito => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('card');

    postDiv.innerHTML = `
        <h3 class="text-xl font-semibold mb-4">${escrito.titulo}</h3>
        <p class="card-text">${escrito.contenido}</p>
    `;

    postsContainer.appendChild(postDiv);
});
