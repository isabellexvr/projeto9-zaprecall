import { useState } from 'react';
import styled from 'styled-components';
import setaVirar from "../assets/img/seta_virar.png";
import cores from '../coresBotoes.js'
const { verde, amarelo, vermelho, cinza } = cores

export default function ImprimirPerguntasFechadas({ decks, perguntasClicadas, setPerguntasClicadas, naoLembradas, quaseNaoLembradas, zap }) {

    const [texto, setTexto] = useState()

    function abrirPergunta(questao) {


        const clicadas = [...perguntasClicadas, questao]

        setPerguntasClicadas(clicadas)
        console.log(clicadas)

        const fechar = clicadas.filter(p => p !== questao)
        fechar.forEach(p => p.status = "fechado")

        if (questao.status === "fechado") {
            questao.status = "aberto"
            setTexto(questao.pergunta)

            return
        }

        if (questao.status === "aberto") {
            questao.status = "resposta"
            setTexto(questao.resposta)

            return
        }

    }

    return (
        <PerguntasFechadas>
            {decks.map((questao, index) =>
                <div
                    className={`${questao.status === "fechado" ? "pergunta-fechada" : "pergunta-aberta"}`}
                    key={index}
                    onClick={() => abrirPergunta(questao)}
                >

                    <Paragrafo 
                    finalizado={questao.status === "fechado" && questao.resultado !== "none" ? "line-through" : "none"} 
                    resultado={questao.status === "fechado" ? questao.cor : "black"} 
                    >
                    {`${(questao.status === "fechado") ? "Pergunta " + parseInt(index + 1) : texto}`}
                    </Paragrafo>


                    
                    <ion-icon color={questao.cor} estaAberto={abrirPergunta === questao} name={questao.icone}></ion-icon>
                    <img alt='seta-virar' onClick={() => abrirPergunta(questao)} src={setaVirar} />


                </div>
            )}
        </PerguntasFechadas>
    )
}

const PerguntasFechadas = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@500;600;700&display=swap');

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


        ion-icon{
            font-size: 27px;
            color: ${props => props.color};
        }
        img {
            display: ${props => props.estaAberto ? "inline" : "none"};
        }
    }
`;

const Paragrafo = styled.div`
       font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.resultado};
        display: ${props => props.sumir ? "none" : "inline"};
        text-decoration-line: ${props => props.finalizado} ;
`