import styled from "styled-components"

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    height:70px;
    width:100vw;
    background: #181818;
    color: #fff;
`

const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items:center;
    max-width: 300px;
    & img {
        height: 60px;
        width: 60px;
        margin-left: 20px;
        margin-top: 10px;
        object-fit: contain;
    }
    & div {
        margin-left: 10px;
    }
`

const FooterCenter = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
    cursor: pointer;

`

const FooterRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 35px;
    & .MuiSlider-root {
        color: #00ff00
    }
`


export { FooterContainer, FooterLeft, FooterRight, FooterCenter}