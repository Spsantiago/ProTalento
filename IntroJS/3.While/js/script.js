let respuesta = parseInt(prompt('ingresa un numero cualquiera') )
let i = 1
const array=[]
while (i <= respuesta) {
    if (i % 5===0){
        array.push(i)
    }
    i++
}
document.write(`<p>${array}</p>`)

let respuesta1 = parseInt(prompt('ingresa un numero entre 1 y 50') )
let respuesta2 = parseInt(prompt('ingresa un numero entre 1 y 50') )
let ind = 1
while (ind <= 50) {
    console.log(ind)
    if (ind === respuesta1 || ind === respuesta2) {
        console.log(`¡Lotería! ${ind} es tu numero`)
    }
    ind++
}

const array2 = [];
while (true) {
    let respuesta = parseInt(prompt('introduce un numero'));

    if (respuesta === 0) {
        console.log(array2);
        break;
    }
    array2.push(respuesta);
}


const array3 = [];
while (true) {
    let respuesta = prompt('introduce una palabra o numero');

    if (respuesta === '') {
       
        break;
    }
    array3.push(respuesta);
}
let resultado = array3.join(' ')
console.log(resultado)
while (true) {
    let respuesta3 = prompt('ingresa un dia de la semana');
    switch (true) {
        case (respuesta3==='lunes'):
            alert('feliz inicio de semana')
            break;
        case (respuesta3==='martes'):
            alert('animo ya van dos dias de la semana')
            break;
        case (respuesta3==='miercoles'):
            alert('el tercer dia es el vencido')
            break;
        case (respuesta3==='jueves'):
            alert('es el cuarto un dia mas para decansar')
            break;
        case (respuesta3==='viernes'):
            alert('Ya sabes lo que dicen, no hay 5to malo')
            break;
        case (respuesta3==='sabado'):
            alert('Es SABADO y el cuerpo lo sabe')
            break;
        case (respuesta3==='domingo'):
            alert('Ve a descansar')
            respuesta3=0
            break;
        default:
            break;
    }
if (respuesta3===0){
    break
}
}
