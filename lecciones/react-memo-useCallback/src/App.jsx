import { useState, useCallback } from "react";
import Encabezado from "./Encabezado";
import ComponenteHijo from "./ComponenteHijo";
import "./estilos.css";

const App = () => {
  const [contador1, cambiarContador1] = useState(1);
  const [contador2, cambiarContador2] = useState(1);
  const [contador3, cambiarContador3] = useState(1);

  // react crea las funciones cada vez que se actualiza un componente
  // por eso react.memo no tiene efecto
  // y hay que usar useCallback para evitar que se rendericen otros componentes que no hayan cambiado de estado

  // pasar function y arreglo de dependencias
  const aumentar1 = useCallback(() => {
    cambiarContador1(contador1 + 1);
    // el contador 1 se vuelve a renderizar solo cuando el valor cambie
  }, [contador1]);

  const aumentar2 = useCallback(() => {
    cambiarContador2(contador2 + 1);
  }, [contador2]);

  const aumentar3 = useCallback(() => {
    cambiarContador3(contador3 + 1);
  }, [contador3]);

  /* Solo usar para aplicaciones muy grandes
	por ejemplo cuando las funciones sean muy grandes o con funciones matematicas complejas
	y no sea necesario volver a crear las funciones
*/

  return (
    <div className="grid">
      <Encabezado />
      <ComponenteHijo
        texto="Contador 1"
        cuenta={contador1}
        sumarUno={aumentar1}
      />
      <ComponenteHijo
        texto="Contador 2"
        cuenta={contador2}
        sumarUno={aumentar2}
      />
      <ComponenteHijo
        texto="Contador 3"
        cuenta={contador3}
        sumarUno={aumentar3}
      />
    </div>
  );
};

export default App;
