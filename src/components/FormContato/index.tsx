import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as S from "./styles";

function FormContato({ voltar }: { voltar: () => void }) {
    const dispatch = useDispatch();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [isVisible, setIsVisible] = useState(true); // Estado para animação de saída

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
        handleClose(); // Fecha com animação
    };

    const handleClose = () => {
        setIsVisible(false); // Inicia a animação de saída
        setTimeout(voltar, 400); // Espera a animação antes de fechar
    };

    return (
        <S.FormContainer isVisible={isVisible}>
            <S.Fechar onClick={handleClose}>✖</S.Fechar>
            <h2>NOVO CONTATO</h2>
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
