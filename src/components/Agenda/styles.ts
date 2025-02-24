import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Faz o container ocupar a altura total da tela */
  text-align: center;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  margin: auto; /* Garante que fica centralizado */
`;

export const Titulo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -20px;
    width: 100px;
    height: 100px;
    background: linear-gradient(to bottom, #70e1f5, #ffd194);
    border-radius: 50%;
    z-index: -1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Botao = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #444;
  }
`;
