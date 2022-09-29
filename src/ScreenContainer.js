import logo from "./assets/img/logo.png";
import setaVirar from "./assets/img/seta_virar.png";
import styled from 'styled-components';
import deck from "./DeckDePerguntas";
import React, { useState } from 'react';

export default function ScreenContainer() {

    const [clicadas, setClicadas] = useState([]);
    const [pergunta, setPergunta] = useState("fechada")

    function mudarPergunta(perguntaClicada){
        console.log(perguntaClicada)
        perguntaClicada.status = true

        const newClicadas = [...clicadas, perguntaClicada]

        setClicadas(newClicadas)
    }

    return (

        <>
            <Container>
                <div className="logo-container">
                    <img alt="logo-container" src={logo} />
                    <h1>ZapRecall</h1>
                </div>

                {deck.map((questao, index) =>
                    <div className={`${clicadas.includes(questao)? "pergunta-aberta": "pergunta-fechada"}`} key={index} onClick={() => mudarPergunta(questao)}>
                        <p>{`${clicadas.includes(questao)? questao.pergunta : "Pergunta "+ parseInt(index+1)}`}</p>
                        <ion-icon opacidade={clicadas.includes(questao)} name="play-outline"></ion-icon>
                    </div>
                )}

                <div className="pergunta-aberta">
                    <h1>O que é JSX?</h1>
                    <img src={setaVirar} />
                </div>

                <Footer>
                    <Botoes>
                        <button className="nao-lembrei">Não lembrei</button>
                        <button className="quase-nao-lembrei">Quase não lembrei</button>
                        <button className="zap">Zap!</button>
                    </Botoes>
                    <h1>0/4 CONCLUÍDOS</h1>
                </Footer>
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

    .pergunta-fechada {
        width: 300px;
        height: 35px;
        background-color: #FFFFFF;
        margin: 12px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        }

        ion-icon{
            font-size: 21.5px;
            opacity: ${props => props.opacidade ? 0 : 1}
        }
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
    }
`;

const Footer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px;
  h1 {
    padding-bottom: 13px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }
`;

const Botoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

  button {
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
  }
  .nao-lembrei {
        background: #FF3030;
        border: 1px solid #FF3030;
    }
    .quase-nao-lembrei {
        background: #FF922E;
        border: 1px solid #FF922E;
    }
    .zap {
        background: #2FBE34;
        border: 1px solid #2FBE34;
    }
`;