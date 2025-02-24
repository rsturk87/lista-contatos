import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  text-align: left;
  position: relative;
  margin: auto;
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

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

export const Dados = styled.div`
  flex: 1;

  strong {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

export const Botoes = styled.div`
  display: flex;
  gap: 5px;
`;

export const Botao = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #444;
  }
`;
