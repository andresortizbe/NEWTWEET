import React from 'react';
import './whatSty.css';


class WhatHap extends React.Component {
    render() {
        return (
            <div class="what">
            <div class="title">{this.props.title}</div>
            <div class="subtitle">{this.props.subtitle}</div>
            <div class="image"><img class="contImg"src={this.props.imageUrl} alt="perfil"></img></div>
            <div class="content">{this.props.content}</div>
            <div class="category"><h6>Es Tendencia en  {this.props.category}</h6></div>
            <div class="notweets"><h6>Tweets   {this.props.noTweets}</h6></div>
            
            
            </div>
    )
    }
}


export default WhatHap;