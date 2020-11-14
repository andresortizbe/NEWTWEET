import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';
import './styles.css';
import {feed} from '../source';

class PrimaryCol extends React.Component {
    constructor() {
        super();
        this.state = {
           newTweet: "",
           newMessage:"",
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
    
    handleInput = (evento) => {
        //Capturar lo que está escribiendo el usuario
        const message = evento.target.value;
        console.log(message);
        this.setState({newTweet:message});
      }
      sendMessage = () => {
        console.log("enviando Mensaje");    
        //const tweetClone = JSON.parse(JSON.stringify(this.state.tweets));
        const tweetClone=[];
         
        //Copiamos el arreglo de mensajes
        // const messagesClone = [...this.state.messages];
        const newMessageObj = {
          
            seleC: false,
            seleT: false,
            seleR: false, 
            profile: "Andres Ortiz",
            username: "AortBej",
            content: this.state.newTweet,
            interaction: {
                comments: 999,
                retweets: 200,
                likes: 122
            },
            verified: true,
            blocked: false,
            profileUrl: `https://www.guiltybit.com/wp-content/uploads/2013/02/legobatman2.png`,
            date: "12/07/2020",
            time: "00:00",
        };
        
        tweetClone.push(newMessageObj);
        var conc= tweetClone.concat(this.state.tweets);
        //var reverse=tweetClone.reverse();
        this.setState({tweets:conc}) 
        this.setState({ newMessage: newMessageObj, newTweet: "" });
      };
    
        render(){
        return (
            <div className="t-col-container">
                <h3>Inicio</h3>
                <PostTweet profileUrl={this.props.profileUrl} 
                handleInput={this.handleInput} 
                newTweet={this.state.newTweet}
                click={this.sendMessage}
                />
                <Feed newMessage={this.state.newMessage} 
                tweets={this.state.tweets} 
                selectedRetweets={this.selectedRetweets}
                selectedLikes={this.selectedLikes}
                selectedComments={this.selectedComments}
                toggleContextMenu={this.toggleContextMenu}
                removeTweet={this.removeTweet}
                />
            </div>
        );
        }
    }
    
    
    

export default PrimaryCol;