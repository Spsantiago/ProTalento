const cuentas = [
    { nombre: 'Mali', saldo: 200, password: '1234' },
    { nombre: 'Gera', saldo: 290, password: '5678' },
    { nombre: 'Maui', saldo: 67, password: '9123' },
];

let usuario = localStorage.getItem('nombre');


const obtenerPassword=()=>{

    let obtener = document.getElementById('password')
    let password= obtener.value
    for (var i = 0; i < cuentas.length; i++) {
        // Verificar si el nombre de ususario existe
        if (cuentas[i].password === password && cuentas[i].nombre === usuario) {
          console.log('bien')
          return true; // el usuario si exixte devuelve true
        }
  
      }
      return alert(`Contraseña del usuario ${usuario} incorrecta`); // el usuario no exixte devueleve false
    
}