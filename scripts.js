// Función para manejar el tema oscuro
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;
toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Función para el login
const loginBtn = document.getElementById('login-btn');
const loginSection = document.getElementById('login-section');
const poemFormSection = document.getElementById('add-poem-section');
const addPoemBtn = document.getElementById('add-poem-btn');
const poemForm = document.getElementById('poem-form');
const poemasList = document.getElementById('poemas-list');

// Función de Login
loginBtn.addEventListener('click', () => {
    loginSection.style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica las credenciales (esto debería ser más seguro, este es solo un ejemplo)
    if (username === 'admin' && password === 'admin123') {
        loginSection.style.display = 'none';
        addPoemBtn.style.display = 'block'; // Mostrar botón para añadir poema
    } else {
        alert('Credenciales incorrectas');
    }
});

// Función para agregar poema
poemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const poemContent = document.getElementById('poem-content').value;
    const poemDiv = document.createElement('div');
    poemDiv.classList.add('poem');
    poemDiv.innerText = poemContent;
    poemasList.appendChild(poemDiv);
    poemFormSection.style.display = 'none'; // Ocultar sección de añadir poema
    document.getElementById('poem-content').value = ''; // Limpiar formulario
});

// Mostrar sección para añadir poema cuando se haga clic en el botón
addPoemBtn.addEventListener('click', () => {
    poemFormSection.style.display = 'block';
    addPoemBtn.style.display = 'none'; // Ocultar botón
});
