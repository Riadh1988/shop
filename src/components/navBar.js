import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import {ProductConsumer} from '../context'; 

class NavBar extends Component{
	state={clicked : false}
	handleClick = () =>{
		this.setState({clicked : !this.state.clicked})
  } 
  componentDidMount(){
      window.addEventListener('scroll', () => {
         let activeClass = 'down';
         if(window.scrollY === 0){
             activeClass = 'top';
         }
         this.setState({ activeClass });
      });
  }
	render(){
    
		return(

      <nav className={`navbar navbar-expand-md fixed-top ${this.state.activeClass}`}>
      <div className="container">
      <NavLink className="navbar-brand" to="/">
        <h1>SHOP</h1>
      </NavLink>
      <button onClick={this.handleClick}  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={this.state.clicked ? 'collapse navbar-collapse justify-content-end item_active' : 'collapse navbar-collapse justify-content-end'} id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/account">Account</NavLink>
          </li> 
        </ul>
        <Link to="/cart" className="cart-link">
          <img src={window.location.origin + "/img/cart.png" } alt="cart" className="cart-png"/>
          <ProductConsumer> 
            {value =>(
              <span className="cart-span">{value.cart.length}</span> 
              
            )}
          </ProductConsumer>
        </Link>
        
      </div>
      </div>
    </nav>
   
		)
	}
}  
 
export default NavBar;