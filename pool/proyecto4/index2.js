const nombre = document.getElementById('pokemon_nombre')
const imagen = document.getElementById('pokemon_imagen')

// funcion asincronica
const main = async () => {
  
  // id random
  const poke_id = Math.floor(Math.random() * 249)

  // data con id random
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke_id}`)

  // pokemon json
  const pokemon = await data.json()

  // enviar nombre al html
  nombre.innerHTML = pokemon.name

  // enviar src a la imagen en html
  imagen.src = pokemon.sprites.front_default;

  console.log(pokemon);
}

// inciar function principal
main()