import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      address:"",
      phone:"",
      email:"",
      results:{}
    }
  }
  handleonChange=(event)=> {
    this.setState({name:event.target.value});
  }
  handleonChangeAddress=(event)=> {
    this.setState({address:event.target.value});
  }
  handleonChangePhone=(event)=> {
    this.setState({phone:event.target.value});
  }
  handleonChangeEmail=(event)=> {
    this.setState({email:event.target.value});
  }
handleButtonOnClick=()=>{
  const result={
    name:this.state.name,
    address:this.state.address,
    phone:this.state.phone,
    email:this.state.email,
  }
  this.setState({results:result});
}
render(){
  return(
    <React.Fragment>
      <div className="main">
        name<input className="name" type="text" value={this.state.name} onChange={this.handleonChange}/>
        Address<input className="address" type="text" value={this.state.address} onChange={this.handleonChangeAddress}/>
        phone<input className="phone" type="text" value={this.state.phone} onChange={this.handleonChangePhone}/>
        email<input className="email" type="text" value={this.state.email} onChange={this.handleonChangeEmail}/>
      
      <button onClick={this.handleButtonOnClick}>Click</button>
      {
        Object.keys(this.state.results).length ? JSON.stringify(this.state.results):null
      }
      </div>
    </React.Fragment>
  )
  }
}



export default App;
