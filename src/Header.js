import React from 'react';
import "./Header.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from "./DataLayer";


function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    console.log('jgjghjgj', user);
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
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header