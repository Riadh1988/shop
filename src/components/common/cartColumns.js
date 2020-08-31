import React, {Component} from 'react';
class CartColumns extends Component {
    
    render() { 
        return ( 
            <div className="row text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <p>Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>Name of Product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>Total</p>
                </div>
        </div>
         );
    }
}
 
export default CartColumns;
 