import React from 'react';
import "./Header.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from "./DataLayer";


function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className='header'>
        <div className='header__left'>
            <SearchRoundedIcon/>
            <input 
            placeholder="Search for Artists, Songs, "
            type="text"
            />
        </div>

        <div className="header__right">
            <Avatar src="" alt="TC"/>
            <h4>Tanish Chaurasia</h4>
        </div>
    </div>
  )
}

export default Header