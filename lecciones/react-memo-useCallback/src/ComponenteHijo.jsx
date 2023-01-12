import { memo } from "react";

const ComponenteHijo = ({ texto, cuenta, sumarUno }) => {
  console.log(`${texto} renderizado`);

  return (
    <div className="caja">
      <p>{texto}</p>
      <h1>{cuenta}</h1>
      <button className="boton" onClick={sumarUno}>
        +1
      </button>
    </div>
  );
};

export default memo(ComponenteHijo);
