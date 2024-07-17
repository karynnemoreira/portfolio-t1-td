import React from "react"
import { createGlobalStyle } from "styled-components"
import Navegacao from "./Components/Navegacao.jsx"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
   background-color: pink;
color: white;
font-family: "Merienda", cursive;
body{
  background-color: black;
}
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Navegacao />
    </>
  )
}

export default App