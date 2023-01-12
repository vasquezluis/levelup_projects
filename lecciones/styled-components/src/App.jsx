import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="">
      <Button title="Click me" />
      <Button bold='bold' title="Do not click me" />
    </div>
  );
}

export default App;
