import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'

//import Components
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import ProductScreen from './components/ProductScreen/ProductScreen'


function App() {
  return (
    <Router >
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Products />
          </Route>
          <Route path="/product/:id" >
            <ProductScreen />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
