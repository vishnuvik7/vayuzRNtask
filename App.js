import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Index from './src/Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <>
     <Index/>
     </>
    );
  }
}

export default App;
