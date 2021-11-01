import React, { Component } from 'react';

class CreateBottom extends Component{
    render(){
        return(
            <footer>
                <h2>CREATE</h2>
                <form action="#" method="post" id="CreateUpdate_mode" onSubmit={function(e){
                    e.preventDefault();
                    this.props.SubmitLog(e.target.title.value, e.target.desc.value);
                }.bind(this)}>
                    <input type="text" name="title" placeholder="TITLE" id="CREATE_TITLE"></input>
                    <p>
                    <textarea name="desc" placeholder="description" id="textareaStyle"></textarea>
                    </p>
                    <p>
                    <input type="submit"></input>
                    </p>

                </form>
            </footer>
        );
    }
}

export default CreateBottom;