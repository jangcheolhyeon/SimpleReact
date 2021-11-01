import React, { Component } from 'react';

class Controls extends Component{
    render(){
        return(
            <ul>
                <li><a href="#" onClick={function(e){
                    e.preventDefault();
                    this.props.PageChange("CREATE");
                }.bind(this)}>Create</a></li>
                <li><a href="#" onClick={function(e){
                    e.preventDefault();
                    this.props.PageChange("UPDATE");
                }.bind(this)}>Update</a></li>
                <li><input type="button" value="button" onClick={function(e){
                    e.preventDefault();
                    this.props.PageChange("DELETE");
                }.bind(this)}></input></li>
            </ul>
        );
    }
}

export default Controls;