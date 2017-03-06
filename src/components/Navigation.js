import React, { Component } from 'react';
import { Link } from 'react-router';
import AnimatedLogo from './AnimatedLogo';

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
            <Link to='/'>
              <AnimatedLogo />
            </Link>
          </div>

          {process.env.NODE_ENV !== 'production' && <Link to='new'>NEW</Link>}

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
                 <Link to='/blog'>Blog</Link>
               </li>
               <li>
                 <Link to='/who'>Who am I?</Link>
               </li>
             </ul>
             : null
          }

          <ul className="menu">
            <li className="menu-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="menu-item">
              <Link to='/blog'>Blog</Link>
            </li>
            <li className="menu-item">
              <Link to='/who'>Who am I?</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
