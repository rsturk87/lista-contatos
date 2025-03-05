import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/contactsSlice";
import { updateContact } from "../../redux/contactsSlice";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import * as S from "./styles";

interface Contato {
    id: number;
    name: string;
    email: string;
    phone: string;
}

function ListaContatos({ voltar }: { voltar: () => void }) {
    const contatos = useSelector((state: any) => state.contacts);
    const dispatch = useDispatch();

    // Estado para armazenar o contato em edição
    const [contatoEditando, setContatoEditando] = useState<Contato | null>(null);
    const [editNome, setEditNome] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editPhone, setEditPhone] = useState("");

    // Função para ativar o modo de edição
    const handleEdit = (contato: Contato) => {
        setContatoEditando(contato);
        setEditNome(contato.name);
        setEditEmail(contato.email);
        setEditPhone(contato.phone);
    };

    // Função para salvar as alterações
    const handleSave = () => {
        if (contatoEditando) {
            dispatch(updateContact({
                id: contatoEditando.id,
                name: editNome,
                email: editEmail,
                phone: editPhone
            }));
            setContatoEditando(null); // Sai do modo de edição
        }
    };

    return (
        <AnimatePresence>
            <S.Container
                as={motion.div}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div>
                    <S.Titulo>
                        CON<br />
                        TATOS
                    </S.Titulo>
                    <S.BotaoNovo onClick={voltar}>Novo Contato</S.BotaoNovo>
                </div>

                <S.Lista>
                    {contatos.map((contato: Contato) => (
                        <S.Item key={contato.id}>
                            {contatoEditando?.id === contato.id ? (
                                // Exibe formulário se o contato estiver sendo editado
                                <S.EditForm
                                    as={motion.div}
                                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <S.Input
                                        type="text"
                                        value={editNome}
                                        onChange={(e) => setEditNome(e.target.value)}
                                    />
                                    <S.Input
                                        type="email"
                                        value={editEmail}
                                        onChange={(e) => setEditEmail(e.target.value)}
                                    />
                                    <S.Input
                                        type="tel"
                                        value={editPhone}
                                        onChange={(e) => setEditPhone(e.target.value)}
                                    />
                                    <S.Botao onClick={handleSave}>
                                        Salvar <FaSave />
                                    </S.Botao>
                                </S.EditForm>
                            ) : (
                                // Exibe os dados normais se não estiver em edição
                                <>
                                    <S.Dados>
                                        <strong>{contato.name}</strong>
                                        <p>{contato.email}</p>
                                        <p>{contato.phone}</p>
                                    </S.Dados>
                                    <S.Botoes>
                                        <S.BotaoIcone onClick={() => handleEdit(contato)}>
                                            <FaEdit />
                                        </S.BotaoIcone>
                                        <S.BotaoIcone onClick={() => dispatch(removeContact(contato.id))}>
                                            <FaTrash />
                                        </S.BotaoIcone>
                                    </S.Botoes>
                                </>
                            )}
                        </S.Item>
                    ))}
                </S.Lista>

                <S.Fechar onClick={voltar}>✖</S.Fechar>
            </S.Container>
        </AnimatePresence>
    );
}

export default ListaContatos;
