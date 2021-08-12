import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Pizzas from './components/Pizzas';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { CartContext } from './context';

function App() {
  const [ cart, setCart ] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem('cart')
    setCart(JSON.parse(cart));
}, []);

useEffect(() => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}, [cart]);

  return (
    <>
      <Router>
          <CartContext.Provider value={{ cart, setCart }}>
              <Switch>
                      <Route path="/" exact component={Home}></Route>
                      <Route path="/pizzas"  component={Pizzas}></Route>
                      <Route path="/pizza/:_id" component={ProductDetails}></Route>
                      <Route path="/cart" component={Cart}></Route>
              </Switch>
          </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
