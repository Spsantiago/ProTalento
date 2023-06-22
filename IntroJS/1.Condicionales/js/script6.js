let respuesta1 = parseInt(prompt('ingresa un numero cualquiera'));
let respuesta2 = parseInt(prompt('ingresa un numero cualquiera'));
let respuesta3 = parseInt(prompt('ingresa un numero cualquiera'));

switch (true) {
    case respuesta1 < respuesta2 && respuesta1 < respuesta3:
        alert(`${respuesta1} es menor que ${respuesta2} y ${respuesta3}`);
        break;
    case respuesta1 > respuesta2 && respuesta1 > respuesta3:
        alert(`${respuesta1} es mayor que ${respuesta2} y ${respuesta3}`);
        break;
    case respuesta1 === respuesta2 && respuesta1 === respuesta3:
        alert(`${respuesta1} es igual que ${respuesta2} y ${respuesta3}`);
        break;
    case respuesta1 < respuesta2 && respuesta1 === respuesta3:
        alert( `${respuesta1} es menor que ${respuesta2} pero igual a ${respuesta3}` );
        break;
    case respuesta1 > respuesta2 && respuesta1 < respuesta3:
        alert(true);
        alert( `${respuesta1} es mayor que ${respuesta2} pero menor a ${respuesta3}` );
        break;
    case respuesta1 > respuesta2 && respuesta1 === respuesta3:
        alert( `${respuesta1} es mayor que ${respuesta2} pero igual a ${respuesta3}` );
        break;
    case respuesta1 < respuesta2 && respuesta1 > respuesta3:
        alert( `${respuesta1} es menor que ${respuesta2} pero mayor a ${respuesta3}` );
        break;
    case respuesta1 === respuesta2 && respuesta1 < respuesta3:
        alert( `${respuesta1} esigual que ${respuesta2} pero menor a ${respuesta3}` );
        break;
    case respuesta1 === respuesta2 && respuesta1 > respuesta3:
        alert( `${respuesta1} es igual que ${respuesta2} pero mayor a ${respuesta3}` );
        break;
    default:
        alert('no es una respuesta valida');
        break;
}
