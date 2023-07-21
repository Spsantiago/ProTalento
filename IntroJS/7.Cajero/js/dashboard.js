const cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 },
];

const usuario = localStorage.getItem("nombre");
const nombre = document.getElementById("nombre");
const accion = document.getElementById("accion");
nombre.textContent = `${usuario}`;

const consultarSaldo = () => {
  let valorRetiro = document.getElementById('valores')
  valorRetiro.classList.remove("form-enable");

  for (var i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre === usuario) {
      let saldo = cuentas[i].saldo;
      accion.textContent = `El saldo actual en la cuenta es de ${saldo} `;
    }
  }
};

const retirarMonto=()=>{
  let valorRetiro = document.getElementById('valores')
  let botonIngreso = document.getElementById('ingreso')
  let botonRetiro = document.getElementById('retiro')
  botonRetiro.classList.remove('form')
  botonRetiro.classList.add('form-enable')
  botonIngreso.classList.add('form')
  botonIngreso.classList.remove('form-enable')
  valorRetiro.classList.add("form-enable");
  accion.textContent='ingresa el monto que deseas retirar (recuerda que debes dejar minimo $10) '
}

const validarRetiro=()=>{
  let valorRetiro = document.getElementById('valor')
  let valor = parseInt( valorRetiro.value)
  for (var i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre === usuario) {
      let saldo = cuentas[i].saldo;
      let resta = saldo - valor 
      if (resta<10) {
        alert('no puedes hacer el retiro de este dinero por que debes dejar minimo $10 en la cuenta')
      } else {
        accion.textContent=`Retiro de ${valor} exitoso
        tu nuevo saldo en la cuenta es de ${resta} 
        `
        cuentas[i].saldo=resta
      }
    }
  }
}

const ingresarMonto=()=>{
  let valorIngreso = document.getElementById('valores')
  let botonRetiro = document.getElementById('retiro')
  let botonIngreso = document.getElementById('ingreso')
  botonIngreso.classList.remove('form')
  botonIngreso.classList.add('form-enable')
  botonRetiro.classList.remove('form-enable')
  botonRetiro.classList.add('form')
  valorIngreso.classList.add("form-enable");
  accion.textContent='ingresa el monto que deseas depositar (recuerda que no debes tener mas de $990) '

}
const validarIngreso=()=>{
  let valorRetiro = document.getElementById('valor')
  let valor = parseInt( valorRetiro.value)
  for (var i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre === usuario) {
      let saldo = cuentas[i].saldo;
      let suma = saldo + valor 
      if (suma>990) {
        alert('no puedes hacer el ingreso de este dinero por que no debes tener mas de $990 en la cuenta')
      } else {
        accion.textContent=`Retiro de ${valor} exitoso
        tu nuevo saldo en la cuenta es de ${suma} 
        `
        cuentas[i].saldo=suma
      }
    }
  }
}