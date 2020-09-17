import React, { Component } from 'react';
import './dashboard.css'
import {Card} from 'react-bootstrap'
// import '../../styles/fontawesome/css/fontawesome.min.css';
class Dashboard extends Component{
    constructor(props){
        super(props);
       this.state={
           rooms:0,
           adaluts:0,
           children:0

       }
    }
    increaseRoomsValue=()=>{
  this.setState({rooms:this.state.rooms+1});
    }
    decreaseRoomsValue=()=>{
        this.setState({rooms:this.state.rooms>=0 ?0:this.state.rooms-1});
    }
    increaseAdalutsValue=()=>{
        this.setState({adaluts:this.state.adaluts+1});
          }
          decreaseAdalutsValue=()=>{
              this.setState({adaluts:this.state.adaluts>=0?0:this.state.adaluts-1});
          }
          increaseChildrenValue=()=>{
            this.setState({children:this.state.children+1});
              }
              decreaseChildrenValue=()=>{
                  this.setState({children:this.state.children?0:this.state.children-1});
              }
    render(){
        return(
            <div>
            <div>ROOM BOOKING</div>
            <h2>Choose Number  of Rooms</h2>
           
            <div className="container"><div className="">ROOMS <div style={{float:'right'}}><button className="minus"  onClick={this.decreaseRoomsValue}><span >-</span></button><span>{this.state.rooms}</span><button className="plus" onClick={this.increaseRoomsValue}><span >+</span></button></div></div><br/>
            <div className=""><i className="fa fa-user-o" aria-hidden="true"></i>ADULTS<div style={{float:'right'}}><button className="minus" onClick={this.decreaseAdalutsValue}>-</button><span>{this.state.adaluts}</span><button className="plus" onClick={this.increaseAdalutsValue}>+</button></div> </div><br/>
            <div className="">CHILDRENS <div style={{float:'right'}}><button className="minus" onClick={this.decreaseChildrenValue}>-</button><span>{this.state.children}</span><button onClick={this.increaseChildrenValue} className="plus">+</button></div>
            </div>
            </div>
            </div>
        )
    }
}

export default Dashboard