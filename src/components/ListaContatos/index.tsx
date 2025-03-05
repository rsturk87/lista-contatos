import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact, updateContact } from "../../redux/contactsSlice";
import * as S from "./styles";
import { motion, AnimatePresence } from "framer-motion";

function ListaContatos({ voltar }: { voltar: () => void }) {
    const contatos = useSelector((state: any) => state.contacts);
    const dispatch = useDispatch();
    const [contatoEditando, setContatoEditando] = useState<any>(null);

    const handleEdit = (contato: any) => {
        setContatoEditando(contato);
    };

    const handleSave = () => {
        if (!contatoEditando.name || !contatoEditando.email || !contatoEditando.phone) return;
        dispatch(updateContact(contatoEditando));
        setContatoEditando(null);
    };

    return (
        <AnimatePresence>
            <S.Container
                as={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <S.Fechar onClick={voltar}>✖</S.Fechar>
                <h2>Contatos</h2>

                {contatos.length === 0 ? <p>Nenhum contato adicionado.</p> : null}

                <S.Lista>
                    {contatos.map((contato: any) => (
                        <S.Item key={contato.id}>
                            {contatoEditando?.id === contato.id ? (
                                <S.EditForm>
                                    <S.Input
                                        type="text"
                                        value={contatoEditando.name}
                                        onChange={(e) =>
                                            setContatoEditando({ ...contatoEditando, name: e.target.value })
                                        }
                                    />
                                    <S.Input
                                        type="email"
                                        value={contatoEditando.email}
                                        onChange={(e) =>
                                            setContatoEditando({ ...contatoEditando, email: e.target.value })
                                        }
                                    />
                                    <S.Input
                                        type="tel"
                                        value={contatoEditando.phone}
                                        onChange={(e) =>
                                            setContatoEditando({ ...contatoEditando, phone: e.target.value })
                                        }
                                    />
                                    <S.Botao onClick={handleSave}>Salvar</S.Botao>
                                </S.EditForm>
                            ) : (
                                <>
                                    <S.Dados>
                                        <strong>{contato.name}</strong>
                                        <p>{contato.email}</p>
                                        <p>{contato.phone}</p>
                                    </S.Dados>
                                    <S.Botoes>
                                        <S.Botao onClick={() => handleEdit(contato)}>Editar</S.Botao>
                                        <S.BotaoExcluir onClick={() => dispatch(removeContact(contato.id))}>
                                            Excluir
                                        </S.BotaoExcluir>
                                    </S.Botoes>
                                </>
                            )}
                        </S.Item>
                    ))}
                </S.Lista>
            </S.Container>
        </AnimatePresence>
    );
}

export default ListaContatos;
