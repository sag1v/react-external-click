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
      <React.Fragment>
        <div>Menu {show ? '-' : '+'}</div>
        <div style={{ height: show ? '100px' : '0px', overflow: 'hidden', transition: 'all 500ms ease' }}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <ExternalClick render={Item} />
        
        <ExternalClick>
          {isExternalClick => (<Menu show={!isExternalClick} />)}
        </ExternalClick>
      </div>
    );
  }
}



export default App;
