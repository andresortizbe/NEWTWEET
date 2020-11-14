import React from 'react';
import './whatSty.css';


export default function SearchDrop(props)  {
    
    
    
        return (
                <div className="searchDropDown">
                    {props.users
                        .filter((user) =>
                            user.profile
                                .toLowerCase()
                                .includes(props.sUser.toLowerCase())
                        )
                        .map((user) => {
                            return (
                                

                                <div className="userCon">
                                    <img
                                        className="profile-avatar"
                                        src={user.profileImg}
                                        alt="profileImage"
                                    />
                                    <div className="data">
                                        <h4 className="user">{user.profile}</h4>
                                        <h5 className="userName">@{user.username}</h5>
                                    </div>
                                </div>

                            );
                        })}
                </div>
                
            



        );
    }
