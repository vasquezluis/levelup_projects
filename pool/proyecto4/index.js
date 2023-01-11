const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");

const pokeCard = (img, titulo, hab1, hab2, hab3, cardId) => {
  cardId.innerHTML = `
    <div class="card">
      <img class="card-img-top" max-width='50%' src="${img}" alt="${titulo}" title="${titulo}" />
      <div class="card-body text-light bg-secondary">
        <h3 class="card-title"><strong>${titulo}</strong></h3>
        <p class="card-text">Habilidad 1: ${hab1}</p>
        <p class="card-text">Habilidad 2: ${hab2}</p>
        <p class="card-text">Habilidad 3: ${hab3}</p>
      </div>
    </div>
  `;
};

const main = async (cardId) => {
  let pokemon = Math.floor(Math.random() * 249);

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let body = await response.json();

  console.log(body);

  let ability1 = body.abilities[0].ability.name;
  let ability2 = body.abilities[1];
  let ability3 = body.abilities[2];

  if (ability2 == null) {
    ability2 = "Nulo";
  } else {
    ability2 = body.abilities[1].ability.name;
  }
  if (ability3 == null) {
    ability3 = "Nulo";
  } else {
    ability3 = body.abilities[2].ability.name;
  }

  pokeCard(
    body.sprites["front_default"],
    body.name,
    ability1,
    ability2,
    ability3,
    cardId
  );
};

main(card1);
main(card2);
main(card3);
main(card4);
main(card5);
main(card6);
