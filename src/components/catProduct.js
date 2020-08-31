import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';  


class CatProduct extends Component {
    render() {  
        return ( 
            <div className="col-4 mg-bottom">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5" onClick={ () => value.handelCatDetail(id) }>
                            <Link to="/product/detail">
                                <img src={img} alt={title} className="card-img-top"/>
                                <div className="shape">Details</div>
                            </Link>
                            <button className="btn" disabled={inCart ? true : false} onClick={() => {value.addToCart(id); value.openModal(id)}} >
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


export default CatProduct;