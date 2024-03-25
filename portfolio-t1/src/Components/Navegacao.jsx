import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import * as S from "./Style.jsx"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


//BrowserRouter: Sempre será o primeiro, a função dele é ser a caixa que vai englobar todo o nosso caminho.

//Routes: Dentro dessa caixa é onde começaremos a arquitetar os nossos caminhos. Determina para onde cada rota vai.

//Route:  <Route /> Específico para cada rota, uma Route para cada. 

//Link: Quando eu clicar em um lugar me leva para outro lugar, dentro do meu código. O Link vem dentro da <li>

function Navegacao() {
    return (
        <BrowserRouter>
            <S.Nav>
                <S.Ul>
                    {/* to = para, um link para o sobre, projetos e início " / " */}
                    <li> <Link to="/"> Início </Link> </li>
                    <li> <Link to="/Sobre"> Sobre </Link> </li>
                    <li> <Link to="/Projetos">  Projetos </Link> </li>
                </S.Ul>
            </S.Nav>

            <Routes> 
                {/* path(caminho): configuração dos dois, Link to="/Sobre" path="Sobre" */}
                {/* element: configura para qual componente que quero ir. elemento={ativar o componente  <Sobre /> } */}
                <Route path="/" element={ <Inicio />} /> 
                <Route path="Sobre" element={<Sobre />} />
                <Route path="Projetos" element={<Projetos />} />
            </Routes>

        </BrowserRouter>
    )
}
export default Navegacao