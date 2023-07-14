//productos valor en usd
const Aqua = 200;
const Emocion = 180;
const Alegria = 160;
const Frescura = 150;

// vendedores
const Juana = [];
const Pedro = [];

const compras = (vendedor) => {
    let compra =
        prompt(`bienvenid@ a compras con ${vendedor}, te presentaremos el catalogo elige un producto y escribe el numero unicamemnte
si deseas escoger varios separalos por medio de una coma EJEMPLO : 1,2,3
    1- Aqua = $${Aqua}
    2- Emocion = $${Emocion}
    3- Alegria = $${Alegria}
    4- Fresura = $${Frescura}
    `);
    let arrayCompra = compra.split(',');

    for (let i = 0; i < arrayCompra.length; i++) {
        let element = parseInt(arrayCompra[i]);
        if (typeof element === 'number') {
            if (element <= 4) {
                switch (true) {
                    case element === 1:
                        element = 200;
                        break;
                    case element === 2:
                        element = 180;
                        break;
                    case element === 3:
                        element = 160;
                        break;
                    case element === 4:
                        element = 150;
                        break;
                    default:
                        break;
                }
                if (vendedor === 'Pedro') {
                    Pedro.push(element);
                } else if (vendedor === 'Juana') {
                    Juana.push(element);
                }
            }
        } else {
            console.log('no es una opcion');
        }
    }

    console.log('compra ' + arrayCompra);
    console.log(`Pedro ${Pedro}`);
    console.log(`Juana ${Juana}`);
};

const totalVentas = (vendedor) => {
    let arrayAContar;
    if (vendedor === 'Pedro') {
        arrayAContar = Pedro;
    } else {
        arrayAContar = Juana;
    }
    const suma=0;
    for (let i = 0; i < arrayAContar.length; i++) {
        const element = arrayAContar[i];
        
        
    }
    alert(
        `el Total de ventas realizadas por ${vendedor} es de ${arrayAContar.length} Produtos y un total en dinero de ${suma}`
    );
};
