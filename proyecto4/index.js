const poke_txt = document.querySelector(".pokemon_txt");
const poke_img = document.querySelector(".pokemon_img");
const card_body = document.querySelector(".card-body");

const main = async () => {
  let pokemon = Math.floor(Math.random() * 249);

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let body = await response.json();

  console.log(body);

  poke_txt.innerText = body.name;
  poke_img.src = body.sprites["front_default"];

  for (let i = 0; i < body.abilities.length; i++) {
    const parrafo = document.createElement("p");
    const node = document.createTextNode(
      `Habilidad ${i + 1}: ` + body.abilities[i].ability.name
    );
    parrafo.appendChild(node);
    card_body.append(parrafo);
  }
};

main();
