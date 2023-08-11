const index = (entrada) => {
    parseInt(entrada)
    let numero = localStorage.getItem('numero');
    if (numero == undefined || null) {
        numero = 8;
    }
    if (entrada === undefined || null) {
    } else {
        localStorage.setItem('numero', numero + entrada);
    }
    console.log('valor de numero ', numero);
    return numero;
};
const URL = fetch(`https://pokeapi.co/api/v2/pokemon/${index()}`, {
    method: 'get',
});
URL.then((pokemon) => {
    return pokemon.json();
})
    .then((pokemonJson) => {
        document.write(`
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    </head> 
    <main class='m-3 d-flex justify-content-center '>
    <div class="card " style="width: 18rem;" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <img src='${
        pokemonJson.sprites.front_default
    }' class="card-img-top" alt="...">
    <div class="card-body">
    <hr/>
    <h5 class="card-title">Nombre: ${pokemonJson.name}</h5>
    <p class="card-text">Tipo de Pokemon: ${pokemonJson.types[0].type.name}</p>
    </div>
    </div>
    <div class='m-2 d-block'>
    <button class='btn btn-outline-secondary' onclick={index(-1)}>Previous</button>
    <button class='btn btn-outline-info'  onclick= {index(1)}>Next</button>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-5" id="exampleModalLabel">${
                pokemonJson.name
            }</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
            <div class="modal-body">
            <img src='${pokemonJson.sprites.front_default}'/>
            <img src='${pokemonJson.sprites.back_default}'/>
            <img src='${pokemonJson.sprites.front_shiny}'/>
            <img src='${pokemonJson.sprites.back_shiny}'/>
             
            <div>
            <ul>
           <li> Peso: ${pokemonJson.weight / 10} kilogramos</li>
           <li>Altura: ${pokemonJson.height / 10} metros</li> 
           <li>Movimientos: ${pokemonJson.abilities[0].ability.name} -- ${
            pokemonJson.abilities[1].ability.name
        } </li>
            
            </ul>

              </div>
            </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </main> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

  `);
    })
    .catch((err) => {
        document.write('Salio mal');
    });
