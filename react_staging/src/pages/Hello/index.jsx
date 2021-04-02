/*
  这个文件名也可以叫index.js
*/ 
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {action1,action2} from '../../redux/action/actions'

class Hello extends Component{
  render(){
    return (
      <div>Hello</div>
    )
  }
  componentDidMount(){
    console.log(this.props)
  }
}

export default connect(
  state => ({init:state.reducer1.init}),
  {
    action1,
    action2
  }
)(Hello)