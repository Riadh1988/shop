import React, {Component} from 'react'; 
import Title from './common/Title';  
import { ProductConsumer } from '../context';
import CatProduct from './catProduct';
 

class CatProducts extends Component {  
 
  render() {   
    return ( 
      <section>
      <div className="container">
        <Title title="List Products"/>
        <div className="row">
          <ProductConsumer>
            {value =>{
              return value.cathegory.map(product =>{
                return <CatProduct key={product.id} product={product} />
              })
            }}
          </ProductConsumer>
        </div>
      </div>
      </section>
     );
  }
}
 
export default CatProducts;