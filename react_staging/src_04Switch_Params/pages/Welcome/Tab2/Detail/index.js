import React, { Component } from 'react'

export default class index extends Component {
  render() {
    // 接收params参数
    const { id } = this.props.match.params
    return (
      <div>
        Detail: {id}
      </div>
    )
  }
}
