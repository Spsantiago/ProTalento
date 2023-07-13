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

        if (element <= 4) {
            if (vendedor==='Pedro') {
                Pedro.push(arrayCompra[i]
            );
            }else if(vendedor==='Juana'){
                Juana.push(arrayCompra[i]);
            }
        } else {
            console.log('no es una opcion');
        }
    }
    console.log(`pedro vendio ${Pedro.length} y Juana vendio ${Juana.length}`)
    console.log('compra ' + arrayCompra);
    console.log(`Pedro ${Pedro}`);
    console.log(`Juana ${Juana}`);

};
