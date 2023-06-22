let respuesta = prompt(
    `Escriba que topping de helado quiere entre
    - oreo
    - kitkat
    - brownie`
);
switch (respuesta) {
    case 'oreo':
        alert('El topping de oreo cuesta 10 MXN.');
        alert('El helado con topping de oreo cuesta 60 MXN.');

        break;
    case 'kitkat':
        alert('El topping de KitKat cuesta 15 MXN.');
        alert('El helado con topping de KitKat cuesta 65 MXN.');

        break;
    case 'brownie':
        alert('El topping de brownie cuesta 20 MXN.');
        alert('El helado con topping de brownie cuesta 70 MXN.');
        break;
    default:
        alert(
            'no tenemos este topping, lo sentimos, el helado sin topping cuesta 50 MXN'
        );
        break;
}
