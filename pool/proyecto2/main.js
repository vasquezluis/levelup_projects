const text_contador = document.getElementById("contador");
const boton = document.querySelectorAll(".btn");

const cambioColor = () => {
  if (Number(text_contador.innerText) > 0) {
    text_contador.className = "verde";
  } else if (Number(text_contador.innerText) < 0) {
    text_contador.className = "rojo";
  } else {
    text_contador.className = "gris";
  }
};

boton.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.id === "sumar") {
      text_contador.innerHTML = Number(text_contador.innerHTML) + 1;
    } else if (element.id === "restar") {
      text_contador.innerHTML = Number(text_contador.innerHTML) - 1;
    } else {
      text_contador.innerHTML = 0;
    }
    cambioColor();
  });
});
