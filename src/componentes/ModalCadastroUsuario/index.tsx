import { AbCampoTexto, AbModal } from "ds-alurabooks";

import imagemPrincipal from "./assets/login.png";

const ModalCadastroUsuario = () => {
  return (
    <AbModal titulo="Cadastrar"  aberta={true} aoFechar={() => console.log("fecha ai")}>
      <figure>
        <img src={imagemPrincipal} alt="Monitor com fechadura e uma pessoa com uma chave logo ao lado." />
      </figure>
      <form></form>
    </AbModal>
  );
};

export default ModalCadastroUsuario;
