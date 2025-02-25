import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: #fff;
  padding: 40px;
  width: 100vw;
  max-width: 1280px;
  margin: auto;
`;

export const Titulo = styled.h1`
  font-size: 144px;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  z-index: 1;
  line-height: 0.9;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -90px;
    width: 270px;
    height: 270px;
    background: linear-gradient(to top left, rgba(30, 218, 255, 0.8), rgba(239, 239, 239, 0.8));
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
  transition: 0.6s;

  &:hover {
    background: #1EDAFF;
    color: #000;
  }
`;
