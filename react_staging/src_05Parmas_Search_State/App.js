import Hello from './pages/Hello'
import Welcome from './pages/Welcome'
import {Redirect, Route,Switch} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
function App() {
  return (
    <div>
      <h1>React Router Dome</h1>
      <MyNavLink to='/hello'>Hollo</MyNavLink>
      <MyNavLink to='/welcome'>Welcome</MyNavLink>
      <hr />
      <Switch>
        {/* 
          exact或exact={true}:开启路由的严格匹配，即to='hello' 与 path='hello' 完全一致
          如果没有就是模糊，如path='/hello'与to='/hello/a/b/c/d'匹配
        */}
        <Route path='/hello' component={Hello}/>
        <Route path='/welcome' component={Welcome}/>
        {/* 放最下面，兜底，哪个路由都没匹配上就重定向到指定路由 */}
        <Redirect to='/hello'/>
      </Switch>
    </div>
  );
}

export default App;
