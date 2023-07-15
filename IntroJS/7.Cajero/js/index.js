const cuentas = [
  { nombre: 'Mali', saldo: 200},
  { nombre: 'Gera', saldo: 290},
  { nombre: 'Maui', saldo: 67},
];

const validarUsuario = (usuario) => {
  for (var i = 0; i < cuentas.length; i++) {
      // Verificar si el nombre de ususario existe
      if (cuentas[i].nombre === usuario) {
        localStorage.setItem('nombre', usuario)
        window.location.href = "../html/password.html"
        return true; // el usuario si exixte devuelve true
      }

    }
    return alert('Este Usuario no esta activo o no existe en la base de datos'); // el usuario no exixte devueleve false
};
