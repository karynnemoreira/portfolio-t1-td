import React, {useState} from "react";
import Cao from "./imagensPortfolio/cao.png"
import TheWitcher from "./imagensPortfolio/homem.png"
import Cruzeiro from "./imagensPortfolio/cruzeiro.png"
import Cartoon from "./imagensPortfolio/cartoon.png"
import Patrocinadores from "./imagensPortfolio/patrocinadores.png"
import Carousel from "nuka-carousel"


function Projetos() {
    const [desafios, setDesafios] = useState([

        { imagem: Cao, titulo: "Fantastika", link: "https://www.outback.com.br/", descricao: "Html, Css, Responsivo" },
        { imagem: TheWitcher, titulo: "The Witcher", link: "https://www.outback.com.br/", descricao: "Html, Css, Position" },
        { imagem: Cruzeiro, titulo: "Cruzeiro", link: "https://www.outback.com.br/", descricao: "Lógica - Js" },
        { imagem: Cartoon, titulo: "Cartoon Network", link: "https://www.outback.com.br/", descricao: "React, Hook useState,useEffect, Styled-Components, Map, Filter" },
        { imagem: Patrocinadores, titulo: "Patrocinadores", link: "https://www.outback.com.br/", descricao: "DOM, useState, useEffect" }
    ]
    )

  
const Carrosel = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  };
  
  const params = {
    wrapAround: true,
     animation: 'zoom',
     slidesToShow: 1, //de 2 em 2 imagens
     autoplay: true, //passar sozinho
     autoplayInterval: 5000, //passar de 4 em 4 segundos automático
     cellAlign: 'center',
    swiping: true, //arrastar o carousel,
    zoomScale: 0.85,
  
    //button
  
    defaultControlsConfig: {
      nextButtonText: '»',
      nextButtonStyle: {
        
          color: "#a7a7f0",
          fontSize: '150px',
          backgroundColor: 'transparent',
          fontFamily:"Inconsolata"
      },
      prevButtonText: '«',
      prevButtonStyle: {
          color: "#a7a7f0",
          fontSize: '150px',
         backgroundColor: 'transparent',
          fontFamily:"Inconsolata"     
      },
  }
}

   

    return (
        <section>

                 <Carousel {...params}>

                {desafios.map((item) => (
                    <div>
                        <a href={item.link} target="_blank">   <img src={item.imagem} alt={item.titulo} /> </a>
                        <h2>{item.titulo}</h2>
                        <h2>{item.descricao}</h2>
                    </div>
                ))}
               </Carousel>


        </section>
    )
}

export default Projetos