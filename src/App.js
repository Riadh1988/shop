import React from 'react'; 
import { Route, Redirect, Switch } from 'react-router-dom'; 
import NavBar from './components/navBar';  
import Home from './components/Home';
import Products from './components/Products'; 
import About from './components/About';
import Contact from './components/Contact';
import Account from './components/Account';
import Cart from './components/Cart';   
import Details from './components/Details';
import Modal from './components/modal';
import SingleCatheory from './components/singleCatheory';
function App() {
  return ( 
    <React.Fragment>
      <NavBar />
      <main> 
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/about" component={About}></Route>  
            <Route path="/contact" component={Contact}></Route>
            <Route path="/account" component={Account}></Route>
            <Route path="/cart" component={Cart}></Route> 
            <Route path="/product/detail" component={Details}></Route>
            <Route path="/cathegory/:id" component={SingleCatheory}></Route>
            <Redirect from="/" exact to="/Home" />
            <Redirect to="/NotFound" />
        </Switch>   
        <Modal />
      </main>
    </React.Fragment> 
  );
}

export default App;
