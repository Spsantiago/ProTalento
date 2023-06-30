

const luzRoja=()=>{
   document.write("<img src='../src/img/luz-roja.png' style='width:200px ;'/>")
   //document.write("<button onclick={luzAmarilla()}>Clic para luz amarilla</button>")
   setTimeout(luzAmarilla(),10)
  

}
const luzAmarilla=()=>{
   document.write("<img src='../src/img/luz-amarilla.png' style='width:200px ;'/>")
  setInterval(luzVerde(),5000)
  
   // document.write("<button onclick={luzVerde()}>Clic para luz verde</button>")
}

const luzVerde=()=>{
   document.write("<img src='../src/img/luz-verde.png'style='width:200px ;'/>")
   setInterval(luzRoja(),5000)
  
   // document.write("<button onclick={luzRoja()}>Clic para luz roja</button>")

}