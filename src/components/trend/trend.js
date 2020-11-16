import React from "react"
import {happen} from '../happendSource';
import WhatHap from "./whatHap";
import Search from "./search";
import './whatSty.css';
let aux;

class Trend extends React.Component {
    constructor() {
        super();
        this.state = {
        WhatHap:happen
        
        }
    }

    render() {

        

                return (
                    
                    <div>
                        <Search />
                        
                        <h2 class="headTitle">Qué Está Pasando</h2> 
                        { 
                        
                         this.state.WhatHap.map( whath => {
                                return (
                                    <WhatHap 
                                        title={whath.title}
                                        subtitle={whath.subtitle}
                                        content={whath.content}
                                        imageUrl={whath.imageUrl}
                                        category={whath.category}
                                        noTweets={update(whath.noTweets)}
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
export default Trend;