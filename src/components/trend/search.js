import React from 'react';
import './whatSty.css';
import { users } from '../userSource';
import SearchDrop from './searchdrop'
import {SearchCircleSolid} from "@graywolfai/react-heroicons";
class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            users: users,
            searchUser: "",
            show:false
            
        }

    }
    handleSearch = (evento) => {
        this.setState({})
        //Capturar lo que está escribiendo el usuario
        const user = evento.target.value;
        if (user==="")
        {
        this.setState({ searchUser: "" ,show:false});
        }
        else
        {
            this.setState({ searchUser: user, show:true });
        }
    };


    render() {
        return (
        <div className="demo">
                <input
                    type="text"
                    className="search-Bar"
                    id="formGroupExampleInput"
                    placeholder="   Busqueda"
                    onChange={this.handleSearch}
                    value={this.state.searchUser}
                />
                <div className="contImgS"><SearchCircleSolid/></div>
             {
                    //Renderizado condicional con operador ternario y operador condicional &&
                }
                <div className="genCon">
                {
                    this.state.show && (<SearchDrop users={this.state.users} sUser={this.state.searchUser} />) 
                }
                {
                    /* props.showContextM && <ContextMenu /> */
                }
                
                </div>
            
            </div>


        );
    }
}

export default Search;