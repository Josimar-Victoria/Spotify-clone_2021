import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { selectPlaylist } from '../../Feature/PlayListSlice'
import Header from './Header'
import SongRow from './SongRow'
import { BodyContainer, Icons, Info, InfoText, Songs } from './Styles'

const Body = () => {
    const playlist = useSelector(selectPlaylist)
    console.log(playlist);
    return (
        <BodyContainer>
            <Header/>
            <Info>
                <img src={playlist?.images[0].url} alt={playlist?.id}/>
                <InfoText>
                    <h4>PLAYLIST</h4>
                    <h1>{playlist?.name}</h1>
                    <p>{playlist?.owner.display_name}</p>
                </InfoText>
            </Info>
            <Songs>
                <Icons>
                    <PlayCircleFilled className='playButtom'/>
                    <Favorite fontSize='large'/>
                    <MoreHoriz fontSize='large'/>
                </Icons>
                {
                    playlist?.tracks?.items.map((item, index) => (
                        <SongRow track={item.track} key={index}/>
                    ))
                }
            </Songs>
        </BodyContainer>

    )
}

export default Body
