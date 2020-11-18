import React from 'react';
import Icon from '../icon/icon';
import Logo from '../logo';

import Account from '../account/account';
import './styles.css';

const Sidebar = (props) => {
    return (
        <div className="t-sidebar">
            <Logo/>
            <div className="t-icon-container">
                {
                    props.iconList.map( (icon,index) => {
                        return (
                            <Icon source={icon}
                                  key={index}
                            />
                        )
                    })
                }
            </div>
            <Account profileUrl={props.profileUrl}/>
        </div>
    )
}

export default Sidebar;