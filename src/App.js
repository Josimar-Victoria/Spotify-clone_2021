import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import { getTokenFromURL } from './Services/LoginURL';
import {selectUser, SET_USER} from './Feature/UserSlice'
import SpotifyWebApi from 'spotify-web-api-js';
import { selectToken, SET_TOKEN } from './Feature/TokenSlice';
import { SET_PLAYLIST } from './Feature/PlayListSlice';

const spotify = new SpotifyWebApi();

function App() {
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const hash = getTokenFromURL()
    const _token = hash.access_token;
    if(_token){
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => dispatch(SET_USER(user)))
      console.log(token);
      spotify.getPlaylist('6g8WjJhpUgP3nNAHNEUkVO')
      .then(playlist => dispatch(SET_PLAYLIST(playlist)))
      console.log();
    }
  },[dispatch])

  return (
    <div>
      {
        user ? <Player/> :<Login/>
      }
      
    </div>
  );
}

export default App;
