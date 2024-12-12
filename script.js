// Aquí puedes incluir los títulos de los poemas de forma manual. 
// Para hacer esto dinámico, necesitarías un backend o alguna herramienta para leer archivos desde el servidor.
const escritos = [
    { title: "El dolor", url: "escrito/El_Dolor.html" },
    // Aquí se pueden agregar más escritos manualmente
];

// Cargar los escritos en el grid del Home
const loadPosts = () => {
    const postsContainer = document.getElementById("posts-container");

    escritos.forEach((escrito) => {
        const postElement = document.createElement("a");
        postElement.href = escrito.url;
        postElement.className = "card hover:scale-105 hover:shadow-lg transition-transform duration-300";

        const titleElement = document.createElement("h3");
        titleElement.className = "text-xl font-semibold mb-4 card-text";
        titleElement.textContent = escrito.title;

        postElement.appendChild(titleElement);
        postsContainer.appendChild(postElement);
    });
};

// Llamar la función para cargar los escritos al cargar la página
document.addEventListener("DOMContentLoaded", loadPosts);
