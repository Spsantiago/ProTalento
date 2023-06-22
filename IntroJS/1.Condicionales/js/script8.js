let respuesta = parseInt(prompt('ingresa una calificacion entre 1 y 10'));
if (respuesta <= 10 && respuesta >= 1) {
    if (respuesta < 6) {
        alert('Reprobado');
    } else if (respuesta >= 6 && respuesta <= 8) {
        alert('Regular');
    } else if (respuesta === 9) {
        alert('Bien');
    } else {
        alert('Excelente');
    }
} else {
    alert('el numero no es valido ingresa uno en el rango');
}
