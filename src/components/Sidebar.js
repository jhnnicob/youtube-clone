import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import TheatersIcon from '@material-ui/icons/Theaters';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOption selected Icon={HomeSharpIcon} name="Home" />
            <SidebarOption Icon={ExploreSharpIcon} name="Explore" />
            <SidebarOption Icon={SubscriptionsSharpIcon} name="Subscriptions" />
            <hr className="sidebar__divider"/>
            <SidebarOption Icon={VideoLibrarySharpIcon} name="Library" />
            <SidebarOption Icon={HistorySharpIcon} name="History" />
            <SidebarOption Icon={OndemandVideoOutlinedIcon} name="Your videos" />
            <SidebarOption Icon={TheatersIcon} name="Your movies" />
            <SidebarOption Icon={WatchLaterIcon} name="Watch later" />
            <SidebarOption Icon={ThumbUpAltIcon} name="Like videos" />
            <SidebarOption Icon={ExpandMoreIcon} name="Show more" />
            <hr className="sidebar__divider"/>
        
        </div>
    )
}

export default Sidebar
