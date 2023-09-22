const buscar = () => {
    const buscador = document.getElementById('buscador')
    let poke = buscador.value
    const objeto = document.getElementById(`${poke}`)
    objeto.classList.add('pokemon')
}