import React from "react";
import Tweet from "./tweet/tweet";



let aux;


class Feed  extends React.Component  {
    constructor() {
        super();
        this.state = {
 
           tweets: []
        }
    }
 
 
    render() {
        
         const contextFn = {
            toggleContextMenuFn: this.props.toggleContextMenu,
            removeTweetFn: this.props.removeTweet,
               
        }
        return (
            
            <div>
                {
                    
                    this.props.tweets.map( (tweet,index) => {
                        return (
                            <Tweet
                                key={index}
                                indice={index}
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                time={tweet.time}
                                date={tweet.date}
                                comments={update(tweet.interaction.comments)}
                                likes={update(tweet.interaction.likes)}
                                retweets={update(tweet.interaction.retweets)}
                                selectedC={this.props.selectedComments}
                                selectedL={this.props.selectedLikes}
                                selectedR={this.props.selectedRetweets}
                                contextFn={contextFn}
                                showContextM={tweet.showContextM}

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
    if(item>999)
      {
        aux=(item/1000).toFixed(2)+"  K";      
      }  
    return aux;
}

export default Feed;