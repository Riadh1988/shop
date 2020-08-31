import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';



class Modal extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {value =>{
                   const {modalOpen, closeModal }= value;
                   const {img, title,price}= value.modalProduct;
                   if(!modalOpen){
                       return null;
                   }else{
                       return(
                        <div id='modal' onClick={() => closeModal()}>
                            <div className="container">
                                <div className="row">
                                    <div className="modal-container">
                                        <h5>Item added to the Card</h5>
                                        <img src={window.location.origin + '/'+img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h6>Price $ {price}</h6>
                                        <Link to="/products"><div onClick={() => closeModal()} >Continue shopping</div></Link>
                                        <Link to="/cart"><div onClick={() => closeModal()} >Go To Cart</div></Link>
                                    
                                    </div>
                                </div>
                            </div>
                       </div>
                   )
                       
                   } 
                }}
            </ProductConsumer>
         );
    }
}
 
export default Modal;