import React, { Component } from 'react';
import './App.css';
import Content from './Components/Content';
import Tableindex from './Components/Tableindex';
import Controls from './Components/Controls';
import ReadBottom from './Components/ReadBottom';
import CreateBottom from './Components/CreateBottom';
import UpdateBottom from './Components/UpdateBottom';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      max_ArrayNum:3,

      Arrays : [
        {id:1, title:"HTML", desc:"HTML is Element", links:"#"},
        {id:2, title:"CSS", desc:"CSS is pretty", links:"#"},
        {id:3, title:"JavaScript", desc:"JavaScript is Coding", links:"#"}
      ],

      Header1 : {
        title:"HOME", links:"#", desc:"welcome!!!"
      },

      mode:"HOME", //여기 원래 mode:"HOME"이다

      footerMain : {
        title:"REACT", desc:"CODING"
      },

      identifyNum : 1

    }
  }
  render(){
    let _title, _desc, footers, _id;
    if(this.state.mode === "HOME"){
      _title = this.state.footerMain.title;
      _desc = this.state.footerMain.desc;
      footers = <ReadBottom title={_title} desc={_desc} ></ReadBottom>
    }
    else if(this.state.mode === "HTML"){
      let i=0;
      while(i<this.state.Arrays.length){
        if(this.state.identifyNum === this.state.Arrays[i].id){
          _title = this.state.Arrays[i].title;
          _desc = this.state.Arrays[i].desc;
          break;
        }
        i++;
      }
      footers = <ReadBottom title={_title} desc={_desc}></ReadBottom>
    }
    else if(this.state.mode === "CREATE"){
      footers = <CreateBottom SubmitLog={function(_title, _desc){
        this.state.max_ArrayNum += 1;
        let newArrays = Array.from(this.state.Arrays);
        newArrays.push({id:this.state.max_ArrayNum, title:_title, desc:_desc, links:"#"});
        this.setState({
          Arrays : newArrays,
          mode : "HTML"
        });
      }.bind(this)}></CreateBottom>
    }

    else if(this.state.mode === "UPDATE"){
      for(let i=0;i<this.state.Arrays.length;i++){
        if(this.state.identifyNum === this.state.Arrays[i].id){
          _title = this.state.Arrays[i].title;
          _desc = this.state.Arrays[i].desc;
          _id = this.state.Arrays[i].id;
        }
      }
      footers = <UpdateBottom data_id={_id} data_title={_title} data_desc={_desc} asdf={function(_id, _title, _desc){
        let newArrays = Array.from(this.state.Arrays);
        for(let i=0;i<newArrays.length;i++){
          if(newArrays[i].id === _id){
            newArrays[i].title = _title;
            newArrays[i].desc = _desc;
            newArrays[i].id = _id;
          }
        }

        this.setState({
          Arrays:newArrays,
          mode:"HTML"
        });
      }.bind(this)}></UpdateBottom>
    }

    return(
      <div className="App">
        <Content title={this.state.Header1.title} desc={this.state.Header1.desc} links={this.state.Header1.links}
        ChangePage={function(){
          this.setState({
            mode:"HOME"
          });
        }.bind(this)}
        ></Content>
        <Tableindex data={this.state.Arrays} ChangePage = {function(id){
          this.setState({
            mode:"HTML",
            identifyNum : Number(id)
          });
        }.bind(this)}></Tableindex>
        <Controls PageChange={function(_mode){
          if(_mode === "DELETE"){
            let newArrays = Array.from(this.state.Arrays);
            if(window.confirm("REALLY?")){
              for(let i=0;i<newArrays.length;i++){
                if(this.state.identifyNum === newArrays[i].id){
                  newArrays.splice(i, 1);
                }
              }
            }
            this.setState({
              mode:"HOME",
              Arrays : newArrays
            })
          }
          else{
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}></Controls>
        {footers}
      </div>
    );
  }
}

export default App;

