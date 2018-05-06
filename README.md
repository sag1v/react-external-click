# react-external-click

#### Capturing clicks outside your component.
![External clicks example](https://imageshack.com/a/img923/2173/28LySr.gif)

You can pass it a `render-prop` or `children as function` ([more details](https://reactjs.org/docs/render-props.html)).
```
import React, { Component } from 'react';
import ExternalClick from 'ExternalClick';

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
```