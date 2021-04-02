/*
  这个文件名也可以叫index.js
*/ 
import React,{Component} from 'react'

export default class Hello extends Component{
  render(){
    return (
      <div>Hello</div>
    )
  }
  componentDidMount(){
    console.log(this.props)
  }
}