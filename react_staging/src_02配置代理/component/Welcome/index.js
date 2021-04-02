import React,{Component} from 'react'
import css from './index.module.css'

export default class Welcome extends Component{
  render(){
    return (
      <div className={ css.title }>Welcome</div>
    )
  }
}