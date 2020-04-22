import React, { Component } from 'react';
import ChildClass from './ChildClass';

class ParentClass extends Component {
  state = { message: '' };
  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };
  render() {
    return (
      <div>
        <ChildClass parentCallback={this.callbackFunction} />
        <p> {this.state.message} </p>
      </div>
    );
  }
}

export default ParentClass;
