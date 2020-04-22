import React, { Component } from 'react';

class ChildClass extends Component {
  sendData = () => {
    this.porps.callBackFunction('hello');
  };

  render() {
    return (
      <div>
        <button onClick={this.props.parentCall}> Click Me</button>
      </div>
    );
  }
}

export default ChildClass;
