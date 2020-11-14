import React from 'react';
import './whatSty.css';
import { users } from '../userSource';
import SearchDrop from './searchdrop'
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
        if (user=="")
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
        <div class="demo">
                <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Usuario"
                    onChange={this.handleSearch}
                    value={this.state.searchUser}
                />
             {
                    //Renderizado condicional con operador ternario y operador condicional &&
                }
                {
                    this.state.show && (<SearchDrop users={this.state.users} sUser={this.state.searchUser} />) 
                }
                {
                    /* props.showContextM && <ContextMenu /> */
                }
                
            
            
            </div>


        );
    }
}

export default Search;