import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';


let aux;

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    render() {

        const {profile, profileName, username, content, display} = {
            profile: "",
            profileName: "",
            username: "",
            content: "",
            display: "",
            time:"",
            date:"",

        };
        const {comments, likes, retweets} = {
            comments: "",
            likes: "",
            retweets: "",
            
        };

        return (
            <div>
                {
                    this.state.tweets.map( tweet => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                time={tweet.time}
                                date={tweet.date}
                                comments={update(tweet.interaction.comments)}
                                likes={update(tweet.interaction.likes)}
                                retweets={update(tweet.interaction.retweets)}
                                />
                                
                        )
                    })
                }
                
            </div>
        );
    }
}
const update = (item) => 
{
    aux=item;
    if(item>1000)
      {
        aux=(item/1000)+"  K";      
      }  
    return aux;
}
export default Feed;