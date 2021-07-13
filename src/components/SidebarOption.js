import React from 'react';
import './SidebarOption.css';

function SidebarOption({selected, Icon, name}) {
    console.log(selected)
    return (
        <div className={`sidebar-option ${selected && "selected"}`}>
            { Icon && 
                <Icon className="sidebar-option__icon"/>} 
            <span>{name}</span>
        </div>
    )
}

export default SidebarOption
