import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <i className='navbar-logo fas fa-democrat'></i>
        <span>Habit Tracker</span>
        <span className='navbar-count'>{this.props.habitCount}</span>
      </nav>
    );
  }
}

export default Navbar;
