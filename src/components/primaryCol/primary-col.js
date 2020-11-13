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
    handleInput = (evento) => {
        //Capturar lo que está escribiendo el usuario
        const message = evento.target.value;
        console.log(message);
        this.setState({newTweet:message});
      }
      sendMessage = () => {
            const tweetClone = JSON.parse(JSON.stringify(this.state.tweets));
             
         
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
                comments: 1000,
                retweets: 2000,
                likes: 122222
            },
            verified: true,
            blocked: false,
            profileUrl: `https://avatarfiles.alphacoders.com/786/78643.png`,
            date: "12/07/2020",
            time: "00:00",
        };
        tweetClone.push(newMessageObj);
        this.setState({tweets:tweetClone}) 
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
                <Feed newMessage={this.state.newMessage} tweets={this.state.tweets} />
            </div>
        );
        }
    }
    
    
    

export default PrimaryCol;