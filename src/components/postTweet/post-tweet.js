import React from 'react';
import './styles.css';

function PostTweet(props) {

    return (
        <div>
            <div className="t-row t-post-tweet">
                <div className="t-profile-img">
                    <img src={props.profileUrl} alt="profile" />
                </div>
                <form>
                    <input
                        id="btn-input"
                        type="text"
                        className="form-control input-sm"
                        placeholder="Escribe tu mensaje aquí"
                        value={props.newTweet}
                        onChange={props.handleInput}
                    />
                    <div className="t-post-options">
                        <button
                            className="btn btn-warning btn-sm"
                            id="btn-chat"
                            onClick={props.click}
                        >
                           Twittear
        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default PostTweet;