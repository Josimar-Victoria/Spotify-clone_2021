import React from 'react'
import { SpotifyPlayer } from './Styles'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'


const Player = () => {
    return (
        <>
            <SpotifyPlayer>
                <Sidebar/>
                <Body/>
            </SpotifyPlayer>
            <Footer/>
        </>
    )
}

export default Player
