import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context'; 
import { PropTypes } from 'prop-types';


class Product extends Component {
    render() { 
        const { id, title, img, price, inCart} = this.props.product;
        return ( 
            <div className="col-4 mg-bottom">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5" onClick={ () => value.handelDetail(id) }>
                            <Link to="/product/detail">
                                <img src={window.location.origin +"/"+ img} alt={title} className="card-img-top"/>
                                <div className="shape">Details</div>
                            </Link>
                            <button className="btn" disabled={inCart ? true : false} onClick={() => {value.addToCart(id); value.openModal(id); }} >
                                {
                                    inCart ? (" In Cart ") : ("Add To Cart</p>")
                                }    
                            </button> 
                        </div>
                        )}
                        
                    </ProductConsumer>
                    <div className="d-flex card-footer justify-content-between">
                        <p className="mb-0 align-self-center title__footer">{title}</p>
                        <p className="mb-0 align-self-center price__footer">$ {price}</p>
                    </div>
                    
                </div>
            </div>
         );
    }
}
Product.propTypes={
    product : PropTypes.shape({
        id:PropTypes.number , 
        title:PropTypes.string,
        img:PropTypes.string, 
        price:PropTypes.number, 
        inCart:PropTypes.bool
    }).isRequired
}


export default Product;