import React, { Component } from 'react';
import {Provider} from './components/context'
import NavBar from './components/NavBar'
import ProductPage from './components/ProductPage';
import Cart from './components/Cart'
import {BrowserRouter , Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider>
          <NavBar />
          <Switch>
            <Route path = "/cart" component ={Cart} />
            <Route path ="/" component={ProductPage} />
          </Switch>

        </Provider>
      </BrowserRouter>
      
    );
  }
}

export default App;
