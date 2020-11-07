import React from 'react';
import './styles.css';
import Trend from "../trend/trend";



const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <Trend/>
        </div>
    )
}

export default SidebarCol;