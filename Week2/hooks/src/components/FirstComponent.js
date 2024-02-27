import React, { useCallback, useState } from 'react'
class FirstComponent extends React.Component
{
  constructor(props){
    super(props);
    console.log('constructor called');
    this.state={
        count:0
    };
  }
  componetDidMount(){
    console.log('componet mount');
  }
  componentWillUnmount(){
    console.log('componet Unmount');
  }

  getSnapshotBeforeUpdate(){
    console.log(`before update ${this.state.count}`)
  }
  static getDrivedStateFromProps(props,state){
    console.log('drived state');
    return props.count;
  }

   handleCountChange=(e) =>{
    this.setState({
        count:e.target.value
    });
  }
  
    render(){
        return(
            <>
            <h1>Welcome {this.state.count}</h1>
            <input value={this.state.count} onChange={this.handleCountChange}></input>
            </>
        )
    }
}

export default FirstComponent;