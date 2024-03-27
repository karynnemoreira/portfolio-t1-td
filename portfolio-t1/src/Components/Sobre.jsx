import React from "react"
import Perfil from "./imagensPortfolio/perfil.jpeg"
import * as S from "./Style.jsx"

function Sobre() {
    return (
        <S.ContainerSobre>
            <S.Perfil src={Perfil} alt="" />

            <div>
                <h2>Olá, eu sou o Caramelo, </h2>
                <h2>venham navegar pelo o meu portólio.</h2>
            </div>

        </S.ContainerSobre>
    )
}

export default Sobre