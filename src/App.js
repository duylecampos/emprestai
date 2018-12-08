import React, { Component } from 'react';
import Topbar from './components/Topbar/Topbar';
import Books from './components/Books/Books';

class App extends Component {
  state = {
    books: [
      {name: 'Guia do mochileiro das galáxias'}
    ]
  }

  render() {
    return (
      <div>
        <Topbar />
        <Books data={this.state.books} />
      </div>
    );
  }
}

export default App;
