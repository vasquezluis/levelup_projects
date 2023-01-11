import { useContext, createContext, useState } from "react";

const userContext = createContext();
const userToggleContext = createContext();

// user useContext aqui para que los hijos no tengan que hacer esas llamadas
export function useUserContext() {
  return useContext(userContext);
}
export function useUserToggleContext() {
  return useContext(userToggleContext);
}

function UserProvider({children}) {
  const [user, setUser] = useState(null);

  const cambiaLogin = () => {
    user ? setUser(null) : setUser({ name: "luis", email: "luis@gmail.com" });
  };

  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={cambiaLogin}>
        {children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}

export default UserProvider;
