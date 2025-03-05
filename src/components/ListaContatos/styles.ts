import styled from "styled-components";

// Container principal da lista de contatos
export const Container = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  position: relative;
`;

// Lista de contatos
export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
`;

// Estilização dos itens da lista
export const Item = styled.div`
  padding: 15px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Estilização para os detalhes de cada contato
export const Dados = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Botões de ações dentro da lista de contatos
export const Botoes = styled.div`
  display: flex;
  gap: 10px;
`;

// Botão de exclusão
export const BotaoExcluir = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    background: darkred;
  }
`;

// Botão de edição
export const BotaoEditar = styled.button`
  background: #ffcc00;
  color: black;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    background: #e6b800;
  }
`;

// Botão de ação geral
export const Botao = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    background: #1edaff;
    color: black;
  }
`;

// Formulário de edição dentro da lista de contatos
export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Input para edição de contatos
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

// Botão de fechar
export const Fechar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
