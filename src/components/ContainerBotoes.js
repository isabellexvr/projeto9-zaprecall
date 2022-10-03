import styled from 'styled-components';
import cores from '../coresBotoes.js'
const { verde, amarelo, vermelho} = cores

export default function ContainerBotoes
  ({
    decks,
    perguntasClicadas,
    setNaoLembradas, naoLembradas,
    setQuaseNaoLembradas, quaseNaoLembradas,
    zap, setZap
  }) {

  function naoLembrei() {

    const aberta = perguntasClicadas[perguntasClicadas.length - 1]

    if (aberta.status !== "resposta") {
      return
    }

    aberta.resultado = "nao-lembrei"
    aberta.cor = vermelho
    aberta.icone = "close-circle"
    aberta.status = "fechado"

    const newNaoLembradas = [...naoLembradas, aberta]
    setNaoLembradas(newNaoLembradas)
  }

  function quaseNaoLembrei() {
    const aberta = perguntasClicadas[perguntasClicadas.length - 1]

    if (aberta.status !== "resposta") {
      return
    }

    aberta.resultado = "quase-nao-lembrei"
    aberta.cor = amarelo
    aberta.icone = "help-circle"
    aberta.status = "fechado"

    const newQuaseNaoLembradas = [...quaseNaoLembradas, aberta]
    setQuaseNaoLembradas(newQuaseNaoLembradas)
  }

  function foiDeZap() {
    const aberta = perguntasClicadas[perguntasClicadas.length - 1]

    if (aberta.status !== "resposta") {
      return
    }

    aberta.resultado = "zap"
    aberta.cor = verde
    aberta.icone = "checkmark-circle"
    aberta.status = "fechado"

    const newZap = [...zap, aberta]
    setZap(newZap)
  }

  return (
    <Footer>
      <Botoes >
        <button data-identifier="forgot-btn" onClick={naoLembrei} className="nao-lembrei">Não lembrei</button>
        <button data-identifier="almost-forgot-btn" onClick={quaseNaoLembrei} className="quase-nao-lembrei">Quase não lembrei</button>
        <button data-identifier="zap-btn" onClick={foiDeZap} className="zap">Zap!</button>
      </Botoes>
      <h1>{naoLembradas.length + quaseNaoLembradas.length + zap.length}/{decks.length} CONCLUÍDOS</h1>
    </Footer>
  )
}

const Footer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@500;600;700&display=swap');
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
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@500;600;700&display=swap');
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
        background: ${vermelho};
        border: 1px solid ${vermelho};
    }
    .quase-nao-lembrei {
        background: ${amarelo};
        border: 1px solid ${amarelo};
    }
    .zap {
        background: ${verde};
        border: 1px solid ${verde};
    }
`;