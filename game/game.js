// Almacenamos el saldo en el almacenamiento local del navegador
let saldo = parseInt(localStorage.getItem('saldo')) || 0;

document.getElementById('saldo').innerText = saldo;

// Función para actualizar el saldo en la pantalla
function actualizarSaldo() {
    document.getElementById('saldo').innerText = saldo;
    localStorage.setItem('saldo', saldo);
}

// Evento para depositar monedas
document.getElementById('depositar').addEventListener('click', function() {
    let cantidad = prompt('¿Cuántas monedas deseas depositar?');
    cantidad = parseInt(cantidad);
    if (cantidad > 0) {
        saldo += cantidad;
        actualizarSaldo();
    }
});

// Evento para retirar monedas
document.getElementById('retirar').addEventListener('click', function() {
    let cantidad = prompt('¿Cuántas monedas deseas retirar?');
    cantidad = parseInt(cantidad);
    if (cantidad > 0 && cantidad <= saldo) {
        saldo -= cantidad;
        actualizarSaldo();
    } else {
        alert('Saldo insuficiente.');
    }
});

// Evento para transferir monedas
document.getElementById('transferir').addEventListener('click', function() {
    document.getElementById('transfer-form').style.display = 'block';
});

// Evento para confirmar la transferencia
document.getElementById('confirmar-transferencia').addEventListener('click', function() {
    let userDestino = document.getElementById('userDestino').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    
    if (cantidad > 0 && cantidad <= saldo && userDestino) {
        saldo -= cantidad;
        alert(`Se han transferido ${cantidad} monedas a ${userDestino}.`);
        actualizarSaldo();
        document.getElementById('transfer-form').style.display = 'none';
    } else {
        alert('Saldo insuficiente o datos incorrectos.');
    }
});

// Evento para cancelar la transferencia
document.getElementById('cancelar-transferencia').addEventListener('click', function() {
    document.getElementById('transfer-form').style.display = 'none';
});
