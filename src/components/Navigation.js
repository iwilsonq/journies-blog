import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  state = {
    mobileMenuToggled: false
  };

  toggleMobileMenu() {
    this.setState({ mobileMenuToggled: !this.state.mobileMenuToggled });
  }

  render() {
    return (
      <div className="navigation-wrapper">
        <div className="navigation">
          <div className="brand">
            <a href=".">
              <h2>Zen Developer</h2>
            </a>
          </div>

          <div className="mobile-menu" onClick={this.toggleMobileMenu.bind(this)}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {
            this.state.mobileMenuToggled ?
             <ul className="mobile-menu-items">
               <li>
                 <Link to='/'>Home</Link>
               </li>
               <li>
                 <Link to='/articles'>Articles</Link>
               </li>
               <li>
                 <Link to='/new'>New Post</Link>
               </li>
               <li>
                 <Link to='/contact'>Contact</Link>
               </li>
             </ul>
             : null
          }

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
