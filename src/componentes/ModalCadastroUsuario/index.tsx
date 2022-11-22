import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import { useState } from "react";

import imagemPrincipal from "./assets/login.png";

const ModalCadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

  return (
    <AbModal
      titulo="Cadastrar"
      aberta={true}
      aoFechar={() => console.log("fecha ai")}
    >
      <figure>
        <img
          src={imagemPrincipal}
          alt="Monitor com fechadura e uma pessoa com uma chave logo ao lado."
        />
      </figure>
      <form>
        <AbCampoTexto label="Nome" value={nome} onChange={setNome} />
        <AbCampoTexto label="Email" value={email} onChange={setEmail} />
        <AbCampoTexto
          label="Endereço"
          value={endereco}
          onChange={setEndereco}
        />
        <AbCampoTexto
          label="Complemento"
          value={complemento}
          onChange={setComplemento}
        />
        <AbCampoTexto label="CEP" value={cep} onChange={setCep} />
        <AbCampoTexto label="Senha" value={senha} onChange={setSenha} />
        <AbCampoTexto
          label="Confirmação de senha"
          value={confirmacaoSenha}
          onChange={setConfirmacaoSenha}
        />
        <footer>
          <AbBotao texto="Cadastrar" />
        </footer>
      </form>
    </AbModal>
  );
};

export default ModalCadastroUsuario;
