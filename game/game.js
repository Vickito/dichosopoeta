// Inicializamos el saldo con 50 monedas
let saldo = 50;
document.getElementById('saldo').innerText = saldo;

// Función para actualizar el saldo
function actualizarSaldo() {
    document.getElementById('saldo').innerText = saldo;
}

// Función para mostrar el mensaje de resultado
function mostrarResultado(mensaje) {
    document.getElementById('mensajeResultado').innerText = mensaje;
    document.getElementById('resultado').style.display = 'block';
}

// Función para cerrar el resultado
document.getElementById('cerrarResultado').addEventListener('click', function() {
    document.getElementById('resultado').style.display = 'none';
});

// Juego de Adivinar el Número
document.getElementById('adivinaNumero').addEventListener('click', function() {
    if (saldo < 2) {
        mostrarResultado("No tienes suficientes monedas para jugar.");
        return;
    }

    saldo -= 2;  // Costo del juego
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;  // Número aleatorio entre 1 y 10
    let adivinanza = prompt("Adivina un número entre 1 y 10:");

    if (parseInt(adivinanza) === numeroAleatorio) {
        saldo += 10;  // Ganas 10 monedas si aciertas
        mostrarResultado(`¡Adivinaste correctamente! Has ganado 10 monedas.`);
    } else {
        saldo -= 2;  // Pierdes 2 monedas si fallas
        mostrarResultado(`Fallaste. El número era ${numeroAleatorio}. Has perdido 2 monedas.`);
    }

    if (saldo <= 0) {
        saldo = 50;  // Si el saldo es negativo, recibe 50 monedas
        mostrarResultado("Tu saldo es negativo. Has recibido 50 monedas para seguir jugando.");
    }

    actualizarSaldo();
});

// Juego de Lanzar la Moneda
document.getElementById('lanzarMoneda').addEventListener('click', function() {
    if (saldo < 2) {
        mostrarResultado("No tienes suficientes monedas para jugar.");
        return;
    }

    saldo -= 2;  // Costo del juego
    let eleccion = prompt("Elige cara o cruz:");

    let lanzamiento = Math.random() < 0.5 ? "cara" : "cruz";  // Elección aleatoria entre cara y cruz
    if (eleccion.toLowerCase() === lanzamiento) {
        saldo += 5;  // Ganas 5 monedas si acertaste
        mostrarResultado(`¡Ganaste! La moneda salió ${lanzamiento}. Has ganado 5 monedas.`);
    } else {
        saldo -= 2;  // Pierdes 2 monedas si fallas
        mostrarResultado(`Perdiste. La moneda salió ${lanzamiento}. Has perdido 2 monedas.`);
    }

    if (saldo <= 0) {
        saldo = 50;  // Si el saldo es negativo, recibe 50 monedas
        mostrarResultado("Tu saldo es negativo. Has recibido 50 monedas para seguir jugando.");
    }

    actualizarSaldo();
});

// Juego de Lanzar el Dado
document.getElementById('lanzarDado').addEventListener('click', function() {
    if (saldo < 2) {
        mostrarResultado("No tienes suficientes monedas para jugar.");
        return;
    }

    saldo -= 2;  // Costo del juego
    let dado = Math.floor(Math.random() * 6) + 1;  // Lanza un dado de 6 caras

    if (dado > 3) {
        saldo += 7;  // Ganas 7 monedas si el dado es mayor que 3
        mostrarResultado(`¡Ganaste! El dado mostró un ${dado}. Has ganado 7 monedas.`);
    } else {
        saldo -= 2;  // Pierdes 2 monedas si el dado es 3 o menos
        mostrarResultado(`Perdiste. El dado mostró un ${dado}. Has perdido 2 monedas.`);
    }

    if (saldo <= 0) {
        saldo = 50;  // Si el saldo es negativo, recibe 50 monedas
        mostrarResultado("Tu saldo es negativo. Has recibido 50 monedas para seguir jugando.");
    }

    actualizarSaldo();
});
