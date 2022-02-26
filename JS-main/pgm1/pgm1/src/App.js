import logo from './logo.svg';
import './App.css';
import react from 'react';
import Info from './Component/Info.js'
import Qualification from './Component/Qualification';
import Project from './Component/Project';
import React from 'react';

class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={"name":"Jerry",
                "email":"Jerry@gmail.com",
                "phno":988611111,
                "qualification":[
                  {
                    "college":"RVCE",
                    "study":"MCA",
                    "marks":8 
                  },
                  {
                    "college":"ksr",
                    "study":"BCA",
                    "marks":7 
                  },
                  {
                    "college":"PSG",
                    "study":"12th",
                    "marks":65 
                  },
                  {
                    "college":"FGC",
                    "study":"SSLC",
                    "marks":64 
                  }
                ]}
             
  }

render(){
  return(
      <React.Fragment>
        
        <Info
        name={this.state.name}
        email={this.state.email}
        phno={this.state.phno}
        />
        <Qualification qualification = {this.state.qualification}/>
        <Project>
        </Project>
      </React.Fragment>
  );
}
}
export default App;

