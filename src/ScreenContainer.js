import logo from "./assets/img/logo.png";
import setaVirar from "./assets/img/seta_virar.png";
import styled from 'styled-components';
import decks from "./deckDePerguntas";
import React, { useState } from 'react';
import ImprimirPerguntasFechadas from "./components/ImprimirPerguntasFechadas";
import ContainerBotoes from "./components/ContainerBotoes";

export default function ScreenContainer() {

    const [perguntasClicadas, setPerguntasClicadas] = useState([]);

    const [naoLembradas, setNaoLembradas] = useState([])

    const [quaseNaoLembradas, setQuaseNaoLembradas] = useState([])

    const [zap, setZap] = useState([])

    return (

        <>
            <Container>
                <div className="logo-container">
                    <img alt="logo-container" src={logo} />
                    <h1>ZapRecall</h1>
                </div>

                <ImprimirPerguntasFechadas 
                setPerguntasClicadas={setPerguntasClicadas}
                perguntasClicadas={perguntasClicadas}
                decks={decks} 
                naoLembradas={naoLembradas}
                quaseNaoLembradas={quaseNaoLembradas}
                zap={zap}
                />

                <div className="pergunta-aberta">
                    <h1>O que é JSX?</h1>
                    <img src={setaVirar} />
                </div>

                <ContainerBotoes 
                perguntasClicadas={perguntasClicadas} 
                naoLembradas={naoLembradas}
                setNaoLembradas={setNaoLembradas}
                quaseNaoLembradas={quaseNaoLembradas}
                setQuaseNaoLembradas={setQuaseNaoLembradas}
                zap={zap}
                setZap={setZap}
                />
            </Container>
            
        </>
    )
}





const Container = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@500;600;700&display=swap');

  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

    .logo-container{
        display: flex;
        align-items: center;
        margin: 40px 0 20px 0;
    }

    .logo-container img {
        width: 52px;
    }

    .logo-container h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }


    .pergunta-aberta {
        background-color: #FFFFD4;
        width: 300px;
        margin: 12px;
        padding: 15px;
        min-height: 100px;
        background: #FFFFD5;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
        ion-icon {
            display: ${props => props.estaAberto? "inline": "none"};
        }
    }
`;

