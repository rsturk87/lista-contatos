import styled from "styled-components";
import { motion } from "framer-motion";

export const FormContainer = styled(motion.div)`
  background: linear-gradient(to top left, rgba(30, 218, 255), rgba(239, 239, 239));
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
  margin-top: 15px;

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

export const SucessoMessage = styled.p`
  color: #2b5e21;
  font-size: 14px;
  margin-top: 8px;
  font-weight: bold;
  text-align: center;
`;

export const ErroMessage = styled.p`
  color: #ff6961;
  font-size: 14px;
  margin-top: 8px;
  font-weight: bold;
  text-align: center;
`;
