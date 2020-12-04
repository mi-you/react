import React from 'react'
import { IndexLink  } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={ true } >Home</NavLink></li>
          {/* <li><IndexLink to="/" activeClassName='active'>Home</IndexLink></li> */}
          {/* <li><NavLink to="/">Home</NavLink></li> */}
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          {/* <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li> */}
          {/* <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
          <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li> */}
        </ul>
        { this.props.children }
      </div>
    )
  }
})
