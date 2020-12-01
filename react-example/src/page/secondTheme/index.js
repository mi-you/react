import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class ClassComp extends Component{
  constructor(props){
    super(props)
    this.state = {
      themeState:'class-theme'
    }
  }
  render(){
    const { themeState } = this.state;
    const { theme } = this.props;
    return (
      <div>
       { themeState + '--' + theme }
      </div>
    )
  }
}
// mapState是一个函数,返回一个对象
const mapState = state => ({
  theme:state.firstTheme.theme
})
// mapDispatch可以是一个函数，也可以是一个对象
// 为函数会得到dispatch和ownProps（容器组件的props对象）两个参数。
const mapDispatch = (dispatch,ownProps) => ({
  secondThemeTest(data){
    dispatch(actionCreators.secondThemeTest(data))
  }
})
// 是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，
// 会被当作 Action creator ，返回的 Action 会由 Redux 自动发出。
// const mapDispatch = {
//   secondThemeTest
// }
export default connect(mapState,mapDispatch)(ClassComp)