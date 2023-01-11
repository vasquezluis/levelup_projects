const btn_color = document.getElementById("color_btn");
const txt_color = document.getElementById("color_txt");
import lista_colores from "./colores.js";
btn_color.addEventListener("click", () => {
  let bgCode = Math.floor(Math.random() * 144);
  txt_color.innerHTML = lista_colores[bgCode];
  document.body.style.background = lista_colores[bgCode];});