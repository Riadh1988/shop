import React, {Component} from 'react'; 
import Title from './common/Title';  
import { ProductConsumer } from '../context';
import Product from './Product';
 

class Products extends Component { 
 
 
  render() {  
    
    return ( 
      <section>
      <div className="container">
        <Title title="List Products"/>
        <div className="row">
          <ProductConsumer>
            {value =>{
              return value.products.map(product =>{
                return <Product key={product.id} product={product} />
              })
            }}
          </ProductConsumer>
        </div>
      </div>
      </section>
     );
  }
}
 
export default Products;