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
      <div>
        <div>Menu {show ? '-' : '+'}</div>
        <div style={{ height: show ? '100px' : '0px', overflow: 'hidden', transition: 'all 500ms ease' }}>
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
        <ExternalClick render={isExternalClick => (<Menu show={!isExternalClick} />)} />
      </div>
    );
  }
}



export default App;
