import { Grid, Slider } from '@material-ui/core'
import { PlayCircleFilledOutlined, PlaylistAdd, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons'
import React from 'react'
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from './Styles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                <img src='https://images-na.ssl-images-amazon.com/images/I/61GYqXgONUL._SL1280_.jpg' alt='Costero'/>
                <div>
                    <h4>Los Dioses</h4>
                    <p>Anuel aa ft Ozuna</p>
                </div>
            </FooterLeft>
            <FooterCenter >
                <Shuffle className='shuffle'/>
                <SkipPrevious className='icon'/>
                <PlayCircleFilledOutlined className='icon'/>
                <SkipNext className='icon'/>
                <Repeat className='repeat'/>
            </FooterCenter>
            <FooterRight>
                <Grid container spacing={2}>
                <Grid item> <PlaylistAdd/> </Grid>
                <Grid item> <VolumeDown/> </Grid>
                <Grid item xs> <Slider/> </Grid>
                </Grid>


            </FooterRight>
        </FooterContainer>
    )
}

export default Footer
