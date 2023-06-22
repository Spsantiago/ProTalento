let respuesta1= parseInt(prompt('ingresa un numero cualquier'))
let respuesta2= parseInt(prompt('ingresa un segundo numero cualquier'))

if (respuesta1 < respuesta2){
    alert(`${respuesta1} es menor que ${respuesta2}`)
}else if(respuesta1 > respuesta2){
    alert(`${respuesta1} es mayor que ${respuesta2}`)
}else {
    alert('esta no es una respuesta valida')

}
