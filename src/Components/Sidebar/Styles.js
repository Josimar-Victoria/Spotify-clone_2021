import styled from "styled-components"

const SidebarContainer = styled.div`
    flex: 0.2;
    height: 100vh;
    background: #000000;
    min-width: 240px;
    color: #fff;
& img{
    height: 70px;
    padding: 10px;
    margin-right: auto;
}
& hr {
    border: 1px solid smokegray;
    width:90%;
    margin: 10px auto;
}
`
const PlayLists = styled.div`
    margin: 20px 10px;
    

`
const Choices = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: grey;
    height:40px;
    cursor: pointer;
    transition: 300ms color ease-in;
    &:hover {
        color: white;
        
    }
    & h5 {
        margin: 10px 0 0 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`



export {Choices,SidebarContainer, PlayLists}