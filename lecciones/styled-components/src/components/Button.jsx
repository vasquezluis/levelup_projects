import styled from "styled-components";

// creacion de boton con estilos css
const StyledButton = styled.button`
  background: white;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  cursor: pointer;
  padding: 4px 12px;
  border: 1px solid #09f;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: ${(props) => (props.bold ? "bold" : "regular")};

  &:hover {
    background: #09f;
  }
`;

function Button({ title, bold }) {
  return (
    <div>
      <StyledButton bold={bold}>{title}</StyledButton>
    </div>
  );
}

export default Button;
