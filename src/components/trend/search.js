import React from 'react';
import './whatSty.css';
class Search extends React.Component {
    constructor() 
         {
             super();
         }
    

    render() 
        {
    return (
        <div class="demo">
        <form class=".t-form">
                    <input placeholder="Search" />
        </form>
      </div> 
              
        );
    }
}

export default Search;