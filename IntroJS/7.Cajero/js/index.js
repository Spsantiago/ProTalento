const cuentas = [
  { nombre: 'Mali', saldo: 200, password: '1234' },
  { nombre: 'Maui', saldo: 67, password: '9123' },
  { nombre: 'Gera', saldo: 290, password: '5678' },
];

const validarUsuario = (usuario) => {
  
  for (var i = 0; i < cuentas.length; i++) {
    // Verificar si el nombre de ususario existe
    if (cuentas[i].nombre === usuario) {
      let addClass = document.getElementById("form");
      localStorage.setItem("nombre", usuario);
      addClass.classList.add("form-enable");
      return true; // el usuario si exixte devuelve true
    }
    console.log('ejecutado')
  }
  return alert("Este Usuario no esta activo o no existe en la base de datos"); // el usuario no exixte devueleve false
};

const obtenerPassword=()=>{
    let usuario = localStorage.getItem('nombre');
    let obtener = document.getElementById('password')
    
    let password= obtener.value
    for (var i = 0; i < cuentas.length; i++) {
        // Verificar si el nombre de ususario y la contraseña exixten existe
        if (cuentas[i].password === password && cuentas[i].nombre === usuario) {
          window.location.href='../html/dashboard.html'
          return true; // el usuario si exixte devuelve true
        }
  
      }
      return alert(`Contraseña del usuario ${usuario} incorrecta`); // el usuario no exixte devueleve false
    
}