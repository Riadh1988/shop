import React, {Component} from 'react'; 
import Title from './common/Title';
import CartColumns from './common/cartColumns';
import { ProductConsumer } from '../context'; 
import { Link } from 'react-router-dom';  
import EmptyCart from './common/emptyCart'; 
import CartList from './common/cartList';
import CartTotal from './common/cartTotal'
class Cart extends Component {
  state = {  }
  render() { 
    return ( 
      <section>
      <ProductConsumer>
            {value =>{
              const{cart} = value;
              console.log(cart.length);
              if(cart.length > 0){
                return(
                  <div className="container">
                    <Title title="Cart"/>  
                    <CartColumns /> 
                    <CartList value={value} />
                    <CartTotal value={value} />
                  </div>
                )
              }
              else{
                return <EmptyCart/>;
              }
            }}
      </ProductConsumer>

      </section>
     );
  }
}
 
export default Cart;
 