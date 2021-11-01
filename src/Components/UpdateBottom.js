import React, { Component } from 'react';

class UpdateBottom extends Component{
    constructor(props){
        super(props);
        this.state = {
            _title:this.props.data_title,
            _desc:this.props.data_desc,
            _id:this.props.data_id
        }
    }
    render(){
        return(
            <footer>
                <h2>Update입니다.</h2>
                <form action="#" id="CreateUpdate_mode" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.asdf(this.state._id, this.state._title, this.state._desc);
                }.bind(this)}>
                    <input type="text" name="title" placeholder="title" value={this.state._title} onChange={function(e){
                        this.setState({
                           _title:e.target.value
                        });
                    }.bind(this)}></input>
                    <p>
                        <textarea name="desc" placeholder="description" id="textareaStyle" value={this.state._desc} onChange={function(e){
                            this.setState({
                                _desc:e.target.value
                            });
                        }.bind(this)}></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </footer>
        );
    }
}

export default UpdateBottom;