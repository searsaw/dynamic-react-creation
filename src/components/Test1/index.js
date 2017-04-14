import React, { Component } from 'react';

class Test1 extends Component {
  componentDidMount() {
    console.log('Test 1 mounted.');
  }

  render() {
    return <h1>This is from test 1, {this.props.name}!</h1>;
  }
}

export default Test1;
