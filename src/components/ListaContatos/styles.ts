import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  width: 90%;
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  position: relative;
  background-color: #fff;
`;

export const Titulo = styled.h1`
  font-size: 64px;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  line-height: 0.9;
  text-align: left;
  margin-left: 35px;
`;

export const BotaoNovo = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  margin: 20px 0;

  &:hover {
    background: #1EDAFF;
    color: #000;
  }
`;

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 500px;
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
`;

export const Dados = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 18px;
    text-align: left;
  }

  p {
    font-size: 14px;
    color: gray;
    font-style: italic;
    text-align: left;
  }
`;

export const Botoes = styled.div`
  display: flex;
  gap: 10px;
`;

export const BotaoIcone = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Fechar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
`;

export const Botao = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  padding: 8px 12px;
  transition: 0.3s;

  &:hover {
    color: #1edaff;
  }

  svg {
    font-size: 18px;
  }
`;
