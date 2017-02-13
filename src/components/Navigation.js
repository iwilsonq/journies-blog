import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-wrapper">
        <div className="navigation">
          <div className="brand">
            <a href="//localhost:3050">
              <h2>Zen Dev</h2>
            </a>
          </div>

          <div className="mobile-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          <ul className="menu">
            <li className="menu-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="menu-item">
              <Link to='/articles'>Articles</Link>
            </li>
            <li className="menu-item">
              <Link to='/new'>New Post</Link>
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
