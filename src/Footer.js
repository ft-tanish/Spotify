import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
// import VolumeDownIcon from "@mui/icons-material/VolumeDown";
// import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
// import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <p>Album and song details</p>
        </div>

        <div className='footer__center'>
            <ShuffleIcon className="footer__green"/>
            <SkipPreviousIcon className="footer__icon"/>
            <PlayCircleOutlineIcon fontSize="large" className="footericon"/>
            <SkipNextIcon className="footer__icon"/>
            <RepeatIcon className="footer__green"/>
        </div>

        <div className='footer__right'>
            <p>Volume controls</p>
        </div>
    </div>
  )
}

export default Footer