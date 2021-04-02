import React,{Component} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

export default class Welcome extends Component{
  render(){
    return (
      <div>
        <p>Welcome</p>
        <div>
          <MyNavLink to='/welcome/tab1'>WTab_1</MyNavLink>
          <MyNavLink to='/welcome/tab2'>WTab_2</MyNavLink>
          <hr />
        </div>
        <Switch>
          <Route path='/welcome/tab1' component={Tab1}/>
          <Route path='/welcome/tab2' component={Tab2}/>
          <Redirect to='/welcome/tab1'/>
        </Switch>
      </div>
    )
  }
}