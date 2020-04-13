import React, { Component } from 'react';

class ClassCounterMount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: '',
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count}`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('document title Updated');
      document.title = `Clicked ${this.state.count}`;
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}> Clicked {this.state.count} </button>
      </div>
    );
  }
}

export default ClassCounterMount;
