import React, { Component } from 'react';

class ReadBottom extends Component{
    render(){
        return(
            <footer>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </footer>
        );
    }
}

export default ReadBottom;