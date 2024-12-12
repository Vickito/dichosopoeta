// Almacenamos el saldo en el almacenamiento local del navegador
let saldo = parseInt(localStorage.getItem('saldo')) || 50;  // Empezamos con 50 monedas si no hay saldo guardado

document.getElementById('saldo').innerText = saldo;

// Función para actualizar el saldo en la pantalla
function actualizarSaldo() {
    document.getElementById('saldo').innerText = saldo;
    localStorage.setItem('saldo', saldo);
}

// Juego de suerte (sorteo)
document.getElementById('jugarSuerte').addEventListener('click', function() {
    if (saldo < 2) {
        alert("No tienes suficientes monedas para jugar.");
        return;
    }
    saldo -= 2;  // El costo del juego

    let resultado = Math.random();  // Generamos un número aleatorio entre 0 y 1
    let mensaje = "";

    // 50% de probabilidades de ganar
    if (resultado < 0.5) {
        let ganancia = Math.floor(Math.random() * 10) + 5;  // Ganamos entre 5 y 15 monedas
        saldo += ganancia;
        mensaje = `¡Ganaste! Has recibido ${ganancia} monedas.`;
    } else {
        let perdida = Math.floor(2 * 0.25);  // Perdemos un 25% de 2 monedas = 0.5, pero lo redondeamos a 1
        saldo -= perdida;
        mensaje = `Perdiste... Has perdido ${perdida} monedas.`;
    }

    if (saldo < 0) {
        saldo = 50;  // Si el saldo es negativo, le damos 50 monedas
        mensaje = "Tu saldo es negativo. ¡Has recibido 50 monedas para continuar jugando!";
    }

    mostrarResultado(mensaje);
    actualizarSaldo();
});

// Juego de ruleta (ruleta simple con una probabilidad de ganar)
document.getElementById('jugarRuleta').addEventListener('click', function() {
    if (saldo < 2) {
        alert("No tienes suficientes monedas para jugar.");
        return;
    }
    saldo -= 2;  // El costo del juego

    let resultado = Math.random();  // Generamos un número aleatorio entre 0 y 1
    let mensaje = "";

    // 40% de probabilidades de ganar
    if (resultado < 0.4) {
        let ganancia = Math.floor(Math.random() * 20) + 10;  // Ganamos entre 10 y 30 monedas
        saldo += ganancia;
        mensaje = `¡Ganaste! Has recibido ${ganancia} monedas de la ruleta.`;
    } else {
        let perdida = Math.floor(2 * 0.25);  // Perdemos un 25% de 2 monedas
        saldo -= perdida;
        mensaje = `Perdiste... Has perdido ${perdida} monedas en la ruleta.`;
    }

    if (saldo < 0) {
        saldo = 50;  // Si el saldo es negativo, le damos 50 monedas
        mensaje = "Tu saldo es negativo. ¡Has recibido 50 monedas para continuar jugando!";
    }

    mostrarResultado(mensaje);
    actualizarSaldo();
});

// Función para mostrar el resultado de un juego
function mostrarResultado(mensaje) {
    document.getElementById('mensaje').innerText = mensaje;
    document.getElementById('resultado').style.display = 'block';
}

// Función para cerrar el resultado
document.getElementById('cerrarResultado').addEventListener('click', function() {
    document.getElementById('resultado').style.display = 'none';
});
