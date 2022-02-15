import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link className="list-group-item" to="/todo">todo</Link></li>
              <li><Link className="list-group-item" to="/about">about</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
