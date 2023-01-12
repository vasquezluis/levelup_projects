import { memo } from "react";

const Encabezado = () => {
  console.log("Encabezado renderizado");

  return (
    <div className="encabezado">
      <h1>Contadores</h1>
    </div>
  );
};

// usar react memo para no tener que renderizar de nuevo el componente
// si este no tiene nigun cambio
// El encabezado queda guardado en memoria
export default memo(Encabezado);
