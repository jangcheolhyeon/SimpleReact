import React, { Component } from 'react';

class Content extends Component{
    render(){
        return(
            <header>
                <h1><a href={this.props.links} onClick={function(e){
                    e.preventDefault();
                    this.props.ChangePage();
                }.bind(this)}>{this.props.title}</a></h1>
                <p>{this.props.desc}</p>
            </header>
        );
    }
}

export default Content;