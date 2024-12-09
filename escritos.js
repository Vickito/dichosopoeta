// Array de escritos. Cada objeto contiene el nombre del escrito y la URL de su página.
const escritos = [
    { title: "Poema 1", url: "poema1.html" },
    { title: "Poema 2", url: "poema2.html" },
    { title: "Poema 3", url: "poema3.html" },
    // Agrega nuevos poemas aquí de forma sencilla
];

// Función para cargar los escritos en la página principal
const loadPosts = () => {
    const postsContainer = document.getElementById("posts-container");

    escritos.forEach((escrito) => {
        const postElement = document.createElement("a");
        postElement.href = escrito.url;
        postElement.className = "bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition";
        
        const titleElement = document.createElement("h3");
        titleElement.className = "text-lg font-semibold";
        titleElement.textContent = escrito.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.className = "mt-4 text-gray-400";
        descriptionElement.textContent = "Este es un breve resumen del poema...";

        postElement.appendChild(titleElement);
        postElement.appendChild(descriptionElement);
        
        postsContainer.appendChild(postElement);
    });
};

// Cargar los escritos cuando la página esté lista
document.addEventListener("DOMContentLoaded", loadPosts);
