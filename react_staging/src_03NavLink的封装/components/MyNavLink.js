import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component{
  render() {
    /* 
      <Link to='/hello'>Hollo</Link>
      <Link to='/welcome'>Welcome</Link> 
      使用NavLink 可以在点击是为其自动添加一个叫'active'的class名，
        这个可以通过activeClassName='xxxx'去重写
      Link 没有（NavLink相当于Link的升级版）
    */
    /* 
      可以把NavLink 二次封装一下，这样可以少些很多属性
      <NavLink activeClassName='my_active' className='emm' to='/hello'>Hollo</NavLink>
      <NavLink activeClassName='my_active' className='emm' to='/welcome'>Welcome</NavLink> 
    */
    /*
      这里的标签之间的内容，即this.props.children 也会被添加到标签之间
      <NavLink activeClassName='my_active' className='emm' {...props}/>{this.props.children}</NavLink>
    */
    return <NavLink activeClassName='my_active' className='emm' {...this.props}/>
  }
}