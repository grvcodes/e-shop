import React, { Component } from 'react';
import NavBar from './components/NavBar'
import ProductPage from './components/ProductPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ProductPage />
      </div>
    );
  }
}

export default App;
