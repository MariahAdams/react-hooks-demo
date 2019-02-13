import React, { Component } from 'react';

class Party extends Component {
  componentDidMount() {
    console.log('I have arrived at the hooks party!');
    document.title = 'present';
  }

  render() {
    return <div>something about a party</div>
  }
}

export default Party;