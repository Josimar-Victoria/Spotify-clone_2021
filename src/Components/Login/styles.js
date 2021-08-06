import styled from "styled-components"

const LoginContainer = styled.div`
display: grid;
place-items: center;
height:100vh;
background: #000000;
color: #fff;
& img {
    width: 100%;
}
`
const LoginButton = styled.a`
padding: 20px;
background: #1bd954;
border-radius: 1.6rem;
color: #fff;
text-decoration: none;
text-transform: uppercase;
font-weight: bolder;
`

export {LoginContainer, LoginButton}