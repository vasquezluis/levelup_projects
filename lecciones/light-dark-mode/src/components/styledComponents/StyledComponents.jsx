import Switch from "./Switch";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const style = {
  minHeight: "100vh",
  textAlign: "center",
  paddingTop: "10rem",
  backgroundColor: "f5f5f5",
};

function StyledComponents() {
  return (
    <div style={style}>
      <SunIcon />
      <Switch />
      <MoonIcon />
      <h1>Luis Vasquez</h1>
      <p>Username: luisvasquez</p>
      <p>Email: luivasquez95@gmail.com</p>
    </div>
  );
}

export default StyledComponents;
