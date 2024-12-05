// Cambiar entre tema claro y oscuro
document.getElementById('toggleTheme').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Almacenamiento de poemas (para que persistan)
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
        `;
        poemsContainer.appendChild(poemElement);
    });
}

// Agregar un poema
document.getElementById("addPoemForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const poem = {
        title: title,
        content: content,
    };

    const poems = JSON.parse(localStorage.getItem("poems")) || [];
    poems.push(poem);

    localStorage.setItem("poems", JSON.stringify(poems));

    loadPoems();  // Recargar la lista de poemas
    document.getElementById("addPoemForm").reset();  // Limpiar el formulario
});

// Cargar poemas al iniciar
window.onload = loadPoems;
