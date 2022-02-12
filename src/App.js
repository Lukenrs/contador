import React, {Component} from "react"
import "./App.css"
export default class App extends Component {

  state = {
    cont: 0
  }
  
  contcr =()=>{
    if(this.state.cont<10){
      this.setState({
        cont: this.state.cont +1
      })
    }
    else{}
    }
   contdecr= ()=>{
    if(this.state.cont>0){
      this.setState({
        cont: this.state.cont -1
     }
     )
    }
     else{}
    }
   reset = () =>{
     this.setState({
       cont:0
     })
   }
  
   
  render(){
    return(
      <div className="contador">
        <h1>{this.state.cont}</h1>
        <button className="button up" onClick={this.contcr}>+</button>
        <button className="button down"onClick={this.contdecr}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
    }
  }


  


