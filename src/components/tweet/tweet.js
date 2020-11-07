import React from 'react';
import './styles.css';
import {
    HeartSolid,
    ShareSolid,
    AnnotationSolid
} from "@graywolfai/react-heroicons";

class Tweet extends React.Component {
    render() {
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3">
                        <h5>{this.props.time}</h5>
                        <h5>{this.props.date}</h5>
                    </div>
                </div>
                <div className="row">

                    <p className="content">
                        {this.props.content}
                    </p>
                </div>
                <div class="interact-container">
                    <div class="contInt"> < AnnotationSolid /> </div>
                   
                    <div class="comments"><h6 class="barTweet">{this.props.comments}</h6></div>
                    <div class="contInt">< ShareSolid /></div>
                    <div class="share"><h6 class="barTweet">{this.props.retweets}</h6></div>
                    <div class="contInt">< HeartSolid /></div>
                    <div class="likes"> <h6 class="barTweet">{this.props.likes} </h6></div>
                </div>

            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
// @TwitterSafety Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
// ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel
// lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor
// dolor rhoncus. Cras id leo sem.