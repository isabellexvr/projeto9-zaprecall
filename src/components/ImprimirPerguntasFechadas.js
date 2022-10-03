import { useState } from 'react';
import styled from 'styled-components';
import setaVirar from "../assets/img/seta_virar.png";
import cores from '../coresBotoes.js'
const { verde, amarelo, vermelho, cinza } = cores

export default function ImprimirPerguntas({ decks, perguntasClicadas, setPerguntasClicadas, naoLembradas, quaseNaoLembradas, zap }) {

    const [texto, setTexto] = useState()

    function abrirPergunta(questao) {

        const clicadas = [...perguntasClicadas, questao]

        setPerguntasClicadas(clicadas)

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
        <Perguntas >
            {decks.map((questao, index) =>
                <div data-identifier="flashcard"
                    className={`${questao.status === "fechado" ? "pergunta-fechada" : "pergunta-aberta"} 
                    ${questao.resultado !== "none" ? "desativar":""}`}
                    key={index}
                    
                >
                    
                    <Paragrafo
                        data-identifier={`${questao.status === "resposta" ? "flashcard-answer" : "flashcard-question"}`}
                        data-identifier2={questao.status !== "none" ? "flashcard-index-item" : ""}
                        finalizado={questao.status === "fechado" && questao.resultado !== "none" ? "line-through" : "none"}
                        resultado={questao.status === "fechado" ? questao.cor : "black"}
                    >
                        {`${(questao.status === "fechado") ? "Pergunta " + parseInt(index + 1) : texto}`}
                    </Paragrafo>


                    <Icone corIcone={questao.cor}>
                        <ion-icon 
                        data-identifier="flashcard-show-btn"
                        onClick={() => abrirPergunta(questao)} 
                        estaAberto={questao.status !== "aberto"} 
                        name={questao.icone}
                        ></ion-icon>
                    </Icone>

                    <ImagemSetaVirar
                        data-identifier="flashcard-turn-btn"
                        alt='seta-virar'
                        estaAberta={questao.status !== "aberto" ? "none" : "inline"}
                        onClick={() => abrirPergunta(questao)}
                        src={setaVirar}
                    />

                </div>
            )}
        </Perguntas>
    )
}

const Icone = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@500;600;700&display=swap');
    font-size: 27px;
    color: ${props => props.corIcone};
`

const Perguntas = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@500;600;700&display=swap');

    .desativar {
        pointer-events: none;
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
        img {
            display: none;
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

        ion-icon {
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
        text-decoration-line: ${props => props.finalizado} ;
`

const ImagemSetaVirar = styled.img`
            position: absolute;
            bottom: 10px;
            right: 10px;
            width: 23px;
            display: ${props => props.estaAberta};
`