import React from "react";
import Agenda from "./components/Agenda/index";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle /> {/* Aqui estamos aplicando os estilos globais */}
      <Agenda />
    </>
  );
}

export default App;