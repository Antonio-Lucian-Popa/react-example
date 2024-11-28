import React, { Component } from 'react';

interface SecondScreenDataProps {
    name: string;
}

class SecondScreen extends Component {

    constructor(props: SecondScreenDataProps) {
        super(props);
    }

  render() {
    return (
      <div>
        <h1>Second Screen</h1>
      </div>
    );
  }
}

export default SecondScreen;