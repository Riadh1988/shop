import React, {Component} from 'react';  
import { ProductConsumer } from '../context';  
import Title from './common/Title';
import CathegoryPro from './cathegoryPro';  
class SingleCatheory extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <div className="container">
                    <Title title="List Products"/>
                    <div className="row">
                    <ProductConsumer>
                        {value =>{
                        return value.products.filter(el => el.genre.id === value.genreCat).map(product =>{
                              
                            return  <CathegoryPro key={product.id} product={product} />  
                        })
                        
                        }}
                    </ProductConsumer>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default SingleCatheory; 

 

