import React, { Component } from 'react';

class Tableindex extends Component{
    shouldComponentUpdate(newProps, newState){
        console.log("shouldComponentUpdate~");
        if(this.props.data === newProps){
            return false;
        }
        return true;
    }
    render(){
        console.log("Render~");
        let data=this.props.data;
        let navArray = [];
        for(let i=0;i<data.length; i++){
            navArray[i] = <li key={data[i].id}><a href={data[i].links}
            onClick={function(id, e){
                e.preventDefault();
                this.props.ChangePage(id);
            }.bind(this, data[i].id)}>{data[i].title}</a></li>
        }
        return(
            <nav>
                <ul>
                    {navArray}
                </ul>
            </nav>
        );
    }
}

export default Tableindex; 