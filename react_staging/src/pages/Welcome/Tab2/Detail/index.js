import React, { Component } from 'react'

export default class index extends Component {
  render() {    
    /* 接收params参数 */
    // const { id } = this.props.match.params
    /*
      接收search参数 :形式类似没被解析的查询字符串（urlencoded）
      可以手动解析或者使用querystring库的parse解析
    */ 
    // const { search } = this.props.location
    /* 
      接收state参数,如果关闭浏览器，或者第一次打开连接并且连接是直接指向这个页面的
      那state会是undefined,所以做个判断。刷新和清除缓存实测并不影响
    */
    const { id } = this.props.location.state || {}
    return (
      <div>
        Detail: {id}
      </div>
    )
  }
}
