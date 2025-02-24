import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactsSlice";
import * as S from "./styles";

function ListaContatos({ voltar }: { voltar: () => void }) {
    const contatos = useSelector((state: any) => state.contacts.contacts);
    const dispatch = useDispatch();

    return (
        <S.Container>
            <S.Fechar onClick={voltar}>✖</S.Fechar>
            <h2>Contatos</h2>
            {contatos.length === 0 ? <p>Nenhum contato adicionado.</p> : null}
            <S.Lista>
                {contatos.map((contato: any) => (
                    <S.Item key={contato.id}>
                        <S.Dados>
                            <strong>{contato.name}</strong>
                            <p>{contato.email}</p>
                            <p>{contato.phone}</p>
                        </S.Dados>
                        <S.Botoes>
                            <S.Botao onClick={() => dispatch(removeContact(contato.id))}>Excluir</S.Botao>
                        </S.Botoes>
                    </S.Item>
                ))}
            </S.Lista>
        </S.Container>
    );
}

export default ListaContatos;
