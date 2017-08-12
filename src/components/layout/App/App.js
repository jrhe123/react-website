import React, { Component } from 'react';


// Components
import Nav from '../../presentation/Nav/Nav';


class App extends Component {
  render() {
    return (
      <div>
        <Nav children={this.props.children} />
      </div>
    );
  }
}

export default App;
