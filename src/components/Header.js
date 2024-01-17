import React, {Component} from 'react';

// In most cases, instead of writing shouldComponentUpdate()
// by hand, you can inherit from React.PureComponent. It is
// equivalent to implementing shouldComponentUpdate() with a
// shallow comparison of current and previous props and state.

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    console.log('header')
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        
      </div>
    );
  }
};

export default Header;