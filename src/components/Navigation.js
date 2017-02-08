import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-wrapper">
        <div className="navigation">
          <div className="brand">
            <h2>Zen Dev</h2>
          </div>

          <ul className="menu">
            <li className="menu-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="menu-item">
              <Link to='/articles'>Articles</Link>
            </li>
            <li className="menu-item">
              <Link to='/about'>About</Link>
            </li>
            <li className="menu-item">
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
