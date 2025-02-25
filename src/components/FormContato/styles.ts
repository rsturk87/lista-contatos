import styled from "styled-components";

export const FormContainer = styled.div<{ isVisible: boolean }>`
  background: linear-gradient(to top left, rgba(30, 218, 255, 0.8), rgba(239, 239, 239, 0.8));
  border-radius: 50%;
  padding: 120px;
  text-align: center;
  width: 80vw;
  max-width: 600px;
  height: 80vw;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  gap: 15px;

  transition: opacity 0.6s ease-in-out, transform 0.7s ease-in-out;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: ${(props) => (props.isVisible ? "scale(1)" : "scale(0.5)")};
  pointer-events: ${(props) => (props.isVisible ? "all" : "none")};

  h2 {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 15px 0;
  border: none;
  font-size: 16px;

  &:focus {
    outline: solid black;
  }
`;

export const Botao = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: 0.6s;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const Fechar = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;