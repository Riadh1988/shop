import React,{Component} from 'react';
import {ProductConsumer} from '../context'; 
import { Link } from 'react-router-dom'; 
import Title from './common/Title';
class Details extends Component {
    render() { 
        return ( 
            <section>
                <div className="container">
                <Title title="Product Details"/>  
                <ProductConsumer>
                    {(value) => { 
                    const {id, title, img, price, company, info, inCart  } = value.detailProduct;
                        return(
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-4">
                                    <img src={window.location.origin + '/'+img} alt={title} />
                                </div>
                                <div className="col-4">
                                    <div>{title}</div>
                                    <div>{price}</div>
                                    <div>{company}</div>
                                    <div>{info}</div> 
                                </div>
                                <div className="col-2"></div>
                                <div className="bottom-links">
                                    <Link to='/'>Back To products</Link>
                                    <button className="btn" disabled={inCart ? true : false} onClick={() => {value.addToCart(id); value.openModal(id)} } >{inCart ? ( <p> In Cart </p>) : ( <p>Add To Cart</p>)}</button> 
                                </div>
                            </div> 
                        );  
                    }}
                </ProductConsumer>
            </div>
                 
            </section>
        );
    }
}
 

export default Details;