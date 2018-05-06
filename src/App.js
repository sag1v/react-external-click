import React, { Component } from 'react';
import ExternalClick from 'ExternalClick';


const Item = (isExternalClick) => (
  <div className={`item ${isExternalClick && 'external'}`}>
    {`${isExternalClick ? 'Click Me' : 'Click Outside'}`}
  </div>
);

class Menu extends Component {
  render() {
    const { show } = this.props;
    return (
      <div className="menu-wrapper">
        <div className="menu-head">Menu {show ? '-' : '+'}</div>
        <div className={`menu-list ${!show ? 'menu-list-closed' : ''}`}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="app">
        <ExternalClick render={Item} />
        
        <ExternalClick>
          {isExternalClick => (<Menu show={!isExternalClick} />)}
        </ExternalClick>
      </div>
    );
  }
}



export default App;
