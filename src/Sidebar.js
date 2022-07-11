import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
        <img
        className='sidebar__logo'
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeRoundedIcon} title="Home" />
      <SidebarOption Icon={SearchRoundedIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr/>
      {console.log('playlists',playlists)}
      {playlists?.items.map(playlist =>{
        console.log('playlist', playlist)
        return  <SidebarOption title={playlist.name}/>
      }
      )}
      
        </div>
  )
}

export default Sidebar