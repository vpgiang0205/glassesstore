import React, { Component } from 'react'
import glassesData from './../../dataGlasses.json'
export default class MainPage extends Component {
  constructor(props){
    super(props);
    
  }
    
  renderUI(){
    <>
      <div>
        <img src={this.glassesData} alt="" />
      </div>
    </>
  }
  render() {
        return (
          <div>
            <button onClick={()=> {console.log(glassesData)}}>click</button>
          </div>
        )
    }
}
