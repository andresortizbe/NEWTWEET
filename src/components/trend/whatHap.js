import React from 'react';
import './whatSty.css';


class WhatHap extends React.Component {
    render() {
        return (
            
            <div className="what cardT">
            <div className="title">{this.props.title}</div>
            <div className="subtitle">{this.props.subtitle}</div>
            <div className="image"><img className="contImg"src={this.props.imageUrl} alt="perfil"></img></div>
            <div className="content">{this.props.content}</div>
            <div className="category"><h6>Es Tendencia en  {this.props.category}</h6></div>
            <div className="notweets"><h6>Tweets   {this.props.noTweets}</h6></div>
            
            
            </div>
    )
    }
}


export default WhatHap;