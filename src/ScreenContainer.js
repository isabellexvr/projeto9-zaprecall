import logo from "./assets/img/logo.png";
import styled from 'styled-components';

export default function ScreenContainer() {
    return (
    <>
        <ScreenContainerStyle>
            <div className="logo-container">
                <img alt="logo-container" src={logo} />
                <h1>ZapRecall</h1>
            </div>
        </ScreenContainerStyle>
    </>
    )
}

const ScreenContainerStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
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
`;