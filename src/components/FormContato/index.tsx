import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as S from "./styles";

function FormContato({ voltar }: { voltar: () => void }) {
    const dispatch = useDispatch();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nome || !email || !telefone) return;

        const novoContato = {
            id: Date.now(),
            name: nome,
            email,
            phone: telefone,
        };

        dispatch(addContact(novoContato));
        voltar();
    };

    return (
        <S.FormContainer>
            <S.Fechar onClick={voltar}>✖</S.Fechar>
            <h2>Novo Contato</h2>
            <form onSubmit={handleSubmit}>
                <S.Input type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />
                <S.Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <S.Input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                <S.Botao type="submit">Adicionar</S.Botao>
            </form>
        </S.FormContainer>
    );
}

export default FormContato;
