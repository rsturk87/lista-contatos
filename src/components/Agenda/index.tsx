import React, { useState } from "react";
import FormContato from "../FormContato/index";
import ListaContatos from "../ListaContatos/index";
import * as S from "./styles";

function Agenda() {
    const [tela, setTela] = useState("home");

    return (
        <S.Container>
            {tela === "home" && (
                <>
                    <S.Titulo>AGE<br></br>NDA</S.Titulo>
                    <S.ButtonContainer>
                        <S.Botao onClick={() => setTela("novo")}>Novo Contato</S.Botao>
                        <S.Botao onClick={() => setTela("lista")}>Ver Contatos</S.Botao>
                    </S.ButtonContainer>
                </>
            )}

            {tela === "novo" && <FormContato voltar={() => setTela("home")} />}
            {tela === "lista" && <ListaContatos voltar={() => setTela("home")} />}
        </S.Container>
    );
}

export default Agenda;
