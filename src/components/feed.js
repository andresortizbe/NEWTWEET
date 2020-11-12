import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';


let aux;
var auxco;


class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }
    removeTweet = (index) => {
        //Clonar la lista de objetos
        let Clone = [...this.state.tweets];
        //Eliminamos el elemento del arreglo
        Clone.splice(index, 1);
        //Actualizamos el estado
        this.setState({tweets: Clone});
    }

    toggleContextMenu = (index) => {
        //Clonar la lista de objetos
        let Clone = JSON.parse(JSON.stringify(this.state.tweets));
        //Actualizamos el valor de la propiedad selected
        Clone[index].showContextM = !Clone[index].showContextM;
        //Actualizamos el estado
        this.setState({tweets: Clone});
    }
    selectedComments=(index)=>
       {
        let cloneTweet=JSON.parse(JSON.stringify(this.state.tweets))
        
        if (this.state.tweets[index].seleC===false)
           {
            cloneTweet[index].seleC=true; 
            cloneTweet[index].interaction.comments=(this.state.tweets[index].interaction.comments+1);
            this.setState({tweets: cloneTweet});       
           }
        else
            {   
            cloneTweet[index].seleC=false;  
            cloneTweet[index].interaction.comments=(this.state.tweets[index].interaction.comments-1);
            this.setState({tweets: cloneTweet});
            }   
        
       }
        
       selectedLikes=(index)=>
       {
        let cloneTweet=JSON.parse(JSON.stringify(this.state.tweets))
        
        if (this.state.tweets[index].seleT===false)
           {
            cloneTweet[index].seleT=true; 
            cloneTweet[index].interaction.likes=(this.state.tweets[index].interaction.likes+1);
            this.setState({tweets: cloneTweet});          
           }
        else
            {   
            cloneTweet[index].seleT=false;  
            cloneTweet[index].interaction.likes=(this.state.tweets[index].interaction.likes-1);
            this.setState({tweets: cloneTweet});
            }   
        
       }
       selectedRetweets=(index)=>
       {
        let cloneTweet=JSON.parse(JSON.stringify(this.state.tweets))
        
        if (this.state.tweets[index].seleR===false)
           {
            cloneTweet[index].seleR=true;
            cloneTweet[index].interaction.retweets=(this.state.tweets[index].interaction.retweets+1);
            this.setState({tweets: cloneTweet});       
           }
        else
            {   
            cloneTweet[index].seleR=false;  
            cloneTweet[index].interaction.retweets=(this.state.tweets[index].interaction.retweets-1);
            this.setState({tweets: cloneTweet});
            }   
        
       }
 
    render() {
         const contextFn = {
            toggleContextMenuFn: this.toggleContextMenu,
            removeTweetFn: this.removeTweet,
        }
        return (
            <div>
                {
                    this.state.tweets.map( (tweet,index) => {
                       var auxco=update(tweet.interaction.comments);
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
                                selectedC={this.selectedComments}
                                selectedL={this.selectedLikes}
                                selectedR={this.selectedRetweets}
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
    if(item>1000)
      {
        aux=(item/1000).toFixed(2)+"  K";      
      }  
    return aux;
}

export default Feed;