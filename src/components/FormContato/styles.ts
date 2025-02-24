import styled from "styled-components";

export const FormContainer = styled.div`
  background: linear-gradient(to bottom, #70e1f5, #ffd194);
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const Botao = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #444;
  }
`;

export const Fechar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
