import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Pizzas from './components/Pizzas';

function App() {
  return (
    <>
      <Router>
              <Switch>
                      <Route path="/" exact component={Home}></Route>
                      <Route path="/pizzas"  component={Pizzas}></Route>
                      {/* <Route path="/pizza/:_id" component={SingleProduct}></Route>
                      <Route path="/cart" component={Cart}></Route> */}
              </Switch>
      </Router>
    </>
  );
}

export default App;
