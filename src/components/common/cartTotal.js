 import React from 'react' 
import { Link } from 'react-router-dom'
function CartTotal({value}){ 
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button type="button" onClick={() => clearCart()}>Clear Cart</button>
                    </Link>
                    <h5> Subtotal: $ {cartSubtotal}</h5>
                    <h5> tax: $ {cartTax}</h5>
                    <h5> Total: $ {cartTotal}</h5>
                </div> 
            </div> 
        </div> 
        
           
    )
}

export default CartTotal;