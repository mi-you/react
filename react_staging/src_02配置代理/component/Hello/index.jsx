/*
  这个文件名也可以叫index.js
*/ 
import React,{Component} from 'react'
import css from './index.module.css'
import axios from 'axios'

export default class Hello extends Component{
  render(){
    return (
      <div className={css.title}>Hello</div>
    )
  }
  componentDidMount(){
    axios.get('http://localhost:3000/student/student')
      .then(console)
      .catch(console)
      
    axios.get('/api2/student')
    .then(console)
    .catch(console)
  }
}