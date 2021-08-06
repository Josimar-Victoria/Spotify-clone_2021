import { getTokenFromURL, loginURL } from "../../Services/LoginURL"
import {LoginContainer, LoginButton} from "./styles"


const Login = () => {

    const token = getTokenFromURL()
    console.log(token);

    return (
        <LoginContainer>
            <img src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg' alt='Spotify_logo' />
            <LoginButton href={loginURL}>Login with Spotify</LoginButton>
        </LoginContainer>
    )
}

export default Login
