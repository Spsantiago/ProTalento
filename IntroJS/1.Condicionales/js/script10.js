const Course = 4999;
const Carrera = 3999;
const Master = 2999;

const Facebook = 20;
const Google = 15;
const Jesua = 50;

const duracionCourse = 2;
const duracionCarrera = 6;
const duracionMaster = 12;
let duracion;
let respuesta1 = parseInt(
    prompt(`escriba el nombre de la opcion que desea estudiar: 
1-Course
2-Carrera
3-Master`)
);

switch (true) {
    case respuesta1 === 1:
        respuesta1 = Course;
        duracion = duracionCourse;
        alert('El valor del Course es de 4999 mensual');
        break;
    case respuesta1 === 2:
        duracion = duracionCarrera;
        respuesta1 = Carrera;
        alert('El valor de la Carrera es de 3999 mensual');
        break;
    case respuesta1 === 3:
        duracion = duracionMaster;
        respuesta1 = Master;
        alert('El valor del Master es de 2999 mensual');
        break;
    default:
        alert('esa no es una respuesta valida');
        break;
}

let respuesta2 = parseInt(
    prompt(`tienes algun descuento por beca? recuerda que tenemos estas opciones
1-Facebook 
2-Google
3-Jesua
4-ninguno`)
);
switch (true) {
    case respuesta2 === 1:
        respuesta2 = Facebook;
        alert('El valor del descuento de Facebook es del 20%');
        break;
    case respuesta2 === 2:
        respuesta2 = Google;
        alert('El valor del descuento de Google es del 15%');
        break;
    case respuesta2 === 3:
        respuesta2 = Jesua;
        alert('El valor del descuento de Jesua es del 50%');
        break;
    case respuesta2 === 4:
        respuesta2 = 100;
        alert('NO tienes una beca');
        break;
    default:
        alert('esa no es una respuesta valida');
        break;
}

let descuento = Math.floor(respuesta1 * respuesta2) / 100;
alert(duracion)
alert(`tu valor a pagar es de ${descuento} mensual`);

const valorTotal = descuento * duracion;

alert(`su valor total a pagar es de ${valorTotal}`);
