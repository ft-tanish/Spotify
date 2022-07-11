import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from '@mui/material';
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
// import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <img 
            className='footer__albumLogo' 
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440" 
            alt=""/>
                <div className='footer__songInfo'>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
        </div>

        <div className='footer__center'>
            <ShuffleIcon className="footer__green"/>
            <SkipPreviousIcon className="footer__icon"/>
            <PlayCircleOutlineIcon fontSize="large" className="footericon"/>
            <SkipNextIcon className="footer__icon"/>
            <RepeatIcon className="footer__green"/>
        </div>

        <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer