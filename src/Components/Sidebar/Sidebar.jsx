import React from 'react'
import { PlayLists, SidebarContainer } from './Styles'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search'
import { LibraryMusicTwoTone } from '@material-ui/icons';
import SidebarChoice from './SidebarChoice';


const Sidebar = () => {
    return ( 
        <>
            <SidebarContainer>
                <img src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg' alt='Spotify_logo' />
                <SidebarChoice title='Home' Icon={HomeIcon}/>
                <SidebarChoice title='Search' Icon={SearchIcon}/>
                <SidebarChoice title='Your Library' Icon={LibraryMusicTwoTone}/>
                <PlayLists>PlayLists</PlayLists>
                <hr/>
                <SidebarChoice title='Anuel' />
                <SidebarChoice title='migos' />
            </SidebarContainer>
        </>
    )
}

export default Sidebar
