class Pokemon {
  constructor(nombre, url) {
    this.nombre = nombre;
    this.url = url;
  }
}
const URL = fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {
  method: "get",
});
URL.then((pokemon) => {
  return pokemon.json();
})
  .then((pokemonJson) => {
    const pokemons = pokemonJson.results.map(
      ({ name, url }) => new Pokemon(name, url)
    );

    console.log("Pokemons =", pokemons);
      document.write(`<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="index.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
      <title>Pokedex</title>
    </head>
    
    `)
    pokemons.map(({ url }) => {
      let urlPoke = fetch(`${url}`, { method: "get" });
      urlPoke
      .then ((pokemon) => {
        return pokemon.json();
      })
      .then((pokemonUni) => {
        document.write(` 
      
        <div
        class="card m-3"
        style="width: 18rem; height: auto"
        data-bs-toggle="modal"
        data-bs-target="#${pokemonUni.name}"
        >
        <img src='${pokemonUni.sprites.front_default}' class="card-img-top" alt="..." />
          <div class="card-body">
          <hr />
          <h5 class="card-title">Nombre: ${pokemonUni.name}</h5>
          <p class="card-text">
          Tipo de Pokemon: ${pokemonUni.types[0].type.name}
          </p>
          </div>
          </div>
        
          <div
          class="modal fade"
          id="${pokemonUni.name}"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          
          >
          <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
          <h2 class="modal-title fs-5" id="exampleModalLabel">
          Nombre ${pokemonUni.name}
          </h2>
          <button
          type="button"
          class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                </div>
                
                <div class="modal-body">
                <img src='${pokemonUni.sprites.front_default}' style='width: 10rem'/>
                <img src='${pokemonUni.sprites.back_default}'style='width: 10rem'/>
                <img src='${pokemonUni.sprites.front_shiny}' style='width: 10rem'/>
                <img src='${pokemonUni.sprites.back_shiny}' style='width: 10rem'/>
                
                <div>
                <ul>
                <li> Peso: ${pokemonUni.weight / 10} kilogramos</li>
                <li>Altura: ${pokemonUni.height / 10} metros</li> 
                <li>Movimientos: ${pokemonUni.abilities[0].ability.name} </li>
                  </ul>
                  </div>
                  </div>
                  <div class="modal-footer">
                  <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  >
                  Close
                  </button>

                  </div>
                  </div>
                  </div>
                </div>
               
                `)
              
                
              });
            });
            
            document.write(`
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>`)
          })
          .catch((error) => {
    document.write("algo salio mal");
  });
