import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'

export default class index extends Component {
  state = {
    arr:[
      {id:1,name:'message1'},
      {id:2,name:'message2'},
      {id:3,name:'message3'},
    ]
  }
  render() {
    const { arr } = this.state
    return (
      <div>
        <ul>
          { arr.map(v => (
            <li key={v.id}>
            {/* 想路由组件传递params参数 */}
              <Link to={`/welcome/tab2/detail/${v.id}`}>{v.name}</Link>
            </li>
          ))}
        </ul>
        <hr />
        {/* 接收params参数 */}
        <Route path='/welcome/tab2/detail/:id' component={ Detail }/>
      </div>
    )
  }
}
