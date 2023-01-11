import "./App.css";
import Hijo from "./components/Hijo";
import UserProvider from "./provider/UserProvider";

function App() {
  return (
    // cualquier componente dentro de userProvider va a poder accecer a user
    <UserProvider>
      <div className="App">
        <Hijo />
      </div>
    </UserProvider>
  );
}

export default App;
