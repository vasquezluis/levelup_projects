// traer propios hooks del UserProvider
import { useUserContext, useUserToggleContext } from "../provider/UserProvider";

function Hijo() {
  // usar la function con contexto desde UserProvider
  const user = useUserContext();

  const cambiaLogin = useUserToggleContext();

  return (
    <div>
      <h1>Componete hijo</h1>
      {user && <p>Hola {user.name}</p>}
      {user && <p>email {user.email}</p>}
      <button onClick={cambiaLogin}>{!user ? "Login" : "Logout"}</button>
    </div>
  );
}

export default Hijo;
