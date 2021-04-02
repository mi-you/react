/*
  这个文件名也可以叫index.js
*/ 
import React,{Component} from 'react'
import css from './index.module.css'

export default class Hello extends Component{
  render(){
    return (
      <div className={css.title}>Hello</div>
    )
  }
  componentDidMount(){
    console.log(this.props)
  }
}