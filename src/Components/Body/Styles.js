import styled from "styled-components"

const BodyContainer = styled.div`
    flex: 0.8;
    background: linear-gradient(#d7392b, #000);
    color: #fff;
    height: 100vh;
    padding: 30px;
    overflow-y: overlay;
`

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
`

const HeaderLeft = styled.div`
display: flex;
align-items: center;
flex: 0.5;
min-width: 75px;
background: #fff;
color: #181818;
border-radius: 30px;
padding:10px;
& input {
    border: none;
    width: 100%;
    outline: none;
}
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
& h4 {
    margin-left: 15px;
}
`
const Info = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;
& img {
    width: 20vw;
    margin: 0 20px;
    box-shadow: 0 40px 60px #000;
}
`
const InfoText = styled.div`
    flex: 1;
    color: #fff;
    & h1 {
        margin-top: 10px;
    }
`
const Songs = styled.div`
    margin: 20px -20px ;
`

const Icons = styled.div`
    display: flex;
    align-items:center;
    & .MuiSvgIcon-root {
        margin-left: 30px;
    }
`
const SongRowContainer = styled.div`
    display: flex;
    margin-left: 40px;
    align-items: center;
    z-index:90;
    color: #fff;
    &:hover {
        cursor: pointer;
        background: #5a5a5a;
        
        z-index:0.8;
    }
    & img {
        height: 50px;
        width: 50px;
        object-fit: contain;
    }
`

const SongInfo = styled.div`
    margin-left: 20px;
    & p {
        margin-top: 3px;
        color: lightgrey;
    }
`

export { 
    SongInfo,
    SongRowContainer,
    BodyContainer, 
    HeaderLeft, 
    HeaderRight, 
    HeaderContainer, 
    Info, 
    InfoText, 
    Songs, 
    Icons 
}