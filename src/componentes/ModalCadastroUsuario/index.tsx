import { AbModal } from "ds-alurabooks"

const ModalCadastroUsuario = () => {
    return (<AbModal aberta = {true}
    aoFechar={()=>console.log("Fecha ai")}>
        <h1>Olá mundo</h1>
    </AbModal>)
}

export default ModalCadastroUsuario