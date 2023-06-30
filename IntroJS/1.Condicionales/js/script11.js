const coche = 0.2;
const moto = 0.1;
const autobus = 0.5;
let respuesta1 = prompt(
    'ingrese el tipo de vehiculo entre coche, moto,autobus'
);

switch (true) {
    case respuesta1 === 'coche':
        respuesta1 = coche;
        break;

    case respuesta1 === 'moto':
        respuesta1 = moto;
        break;

    case respuesta1 === 'autobus':
        respuesta1 = autobus;
        break;
    default:
        alert('esta no es una respuesta valida');
        break;
}

const respuesta2 = parseInt(
    prompt('ingrese en numero la cantidad de kilometos recorridos')
);

const valorKm = respuesta1 * respuesta2;

alert(` el valor a pagar por los kilometros recorridos es ${valorKm}`);

let respuesta3 = parseInt(prompt('ingrese los litros consumidos'));
let totalAPagar;
if (respuesta3 < 100 && respuesta3 > 0) {
    totalAPagar = valorKm + 5;
} else {
    totalAPagar = valorKm + 10;
}
alert(`el valor total a pagar es $${totalAPagar}`);
