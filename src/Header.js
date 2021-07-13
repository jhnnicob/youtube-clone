import React from 'react'
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MicSharpIcon from '@material-ui/icons/MicSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuSharpIcon />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png" />
            </div>
            <div className="header__middle">
                <div className="search">
                    <input type="text" name="searchFilter" placeholder="Search" />
                    <button><SearchSharpIcon /></button>
                </div>
                <button><MicSharpIcon /></button>
            </div>
            <div className="header__right">
                <button><VideoCallSharpIcon /></button>
                <button><AppsSharpIcon /></button>
                <button><NotificationsSharpIcon /></button>
                <button><AccountCircleSharpIcon /></button>
            </div>
        </div>
    )
}

export default Header
