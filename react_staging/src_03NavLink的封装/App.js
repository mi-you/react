import Hello from './pages/Hello'
import Welcome from './pages/Welcome'
import {Route} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
function App() {
  return (
    <div>
      <h1>React Router Dome</h1>
      <MyNavLink to='/hello'>Hollo</MyNavLink>
      <MyNavLink to='/welcome'>Welcome</MyNavLink>

      <Route path='/hello' component={Hello}/>
      <Route path='/welcome' component={Welcome}/>
    </div>
  );
}

export default App;
