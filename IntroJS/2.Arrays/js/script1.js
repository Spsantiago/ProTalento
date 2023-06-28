const array = [];
for (let i = 0; i < 11; i++) {
    numero = Math.random().toFixed(1) * 10;
 
    array.push(numero);
}

let respuesta = prompt('ingresa varias palabras separadas por comas');

const array2 = respuesta.split(',');

const array3 = [10, 40, 30, 20, 15, 5];

const orden = array3.sort((a,b)=>a-b)
min=Math.min(...array3)
max=Math.max(...array3)

document.write(`
<p>array = [${array}]</p>
<p>array2= [${array2}]</p>
<p>el arreglo en oreden = [${orden}]</p>
<p>el valor minimo del arreglo ${min}</p>
<p>el valor maximo del arreglo es ${max} </p>
`);