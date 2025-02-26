import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as S from "./styles";
import { motion, AnimatePresence } from "framer-motion";

function FormContato({ voltar }: { voltar: () => void }) {
    const dispatch = useDispatch();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [erro, setErro] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nome || !email || !telefone) {
            setErro(true);
            return;
        }

        const novoContato = {
            id: Date.now(),
            name: nome,
            email,
            phone: telefone,
        };

        dispatch(addContact(novoContato));
        setErro(false);
        setSucesso(true); // Exibe a mensagem de sucesso

        // Limpa os campos do formulário
        setNome("");
        setEmail("");
        setTelefone("");

        // Oculta a mensagem de sucesso após 2 segundos e fecha o formulário
        setTimeout(() => {
            setSucesso(false);
            handleClose();
        }, 2000);
    };

    const handleClose = () => {
        setTimeout(voltar, 500);
    };

    return (
        <AnimatePresence>
            <S.FormContainer
                as={motion.div}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <S.Fechar onClick={handleClose}>✖</S.Fechar>
                <h2>NOVO CONTATO</h2>
                <form onSubmit={handleSubmit}>
                    <S.Input
                        type="text"
                        placeholder="Nome Completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <S.Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.Input
                        type="tel"
                        placeholder="Telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                    <S.Botao type="submit">Adicionar</S.Botao>

                    {/* Mensagem de erro animada */}
                    <AnimatePresence>
                        {erro && (
                            <S.ErroMessage
                                as={motion.p}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                Preencha todos os campos!
                            </S.ErroMessage>
                        )}
                    </AnimatePresence>

                    {/* Mensagem de sucesso animada */}
                    <AnimatePresence>
                        {sucesso && (
                            <S.SucessoMessage
                                as={motion.p}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                Contato adicionado com sucesso! ✅
                            </S.SucessoMessage>
                        )}
                    </AnimatePresence>
                </form>
            </S.FormContainer>
        </AnimatePresence>
    );
}

export default FormContato;
