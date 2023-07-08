
let COLORES = ['Luz-Roja', 'luz-Amarilla', 'Luz-Verde']
const semaforoImg = document.querySelector('#semaforo')

function semaforoLuz() {
  const color = COLORES.pop()
  if (!COLORES.length)
    COLORES = ['Luz-Roja', 'luz-Amarilla', 'Luz-Verde']
  semaforoImg.src = "../src/img/"+color+".png"
  return color
}

const intervalID = setInterval(semaforoLuz, 3500)