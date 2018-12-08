import React, { Component } from 'react';
import Topbar from './components/Topbar/Topbar';
import Books from './components/Books/Books';

class App extends Component {
  state = {
    books: [
      {
        title: 'Guia do mochileiro das gálaxias',
        writer: 'George Orwell',
        owner: 'João',
        cover: 'http://books.google.com/books/content?id=RhqJWjZ_6o4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
      }
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
