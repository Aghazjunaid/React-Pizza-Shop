import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
              <Switch>
                      <Route path="/" component={Home} exact></Route>
                      {/* <Route path="/pizzas" exact component={ProductsPage}></Route>
                      <Route path="/pizza/:_id" component={SingleProduct}></Route>
                      <Route path="/cart" component={Cart}></Route> */}
              </Switch>
      </Router>
    </>
  );
}

export default App;
