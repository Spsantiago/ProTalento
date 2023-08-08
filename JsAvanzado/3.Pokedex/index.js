
const URL = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/', { method: 'get' });

URL.then((pokemon) => {
    return pokemon.json();
})
    .then((pokemonJson) => {
        document.write(`  
    <div class="card" style="width: 18rem;">
    <img src='${pokemonJson.sprites.front_default.value}' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pokemonJson.name}</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `);
    })
    .catch((err) => {
        document.write('Salio mal');
    });
