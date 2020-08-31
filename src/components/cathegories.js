import React, {Component} from 'react';  
import { ProductConsumer } from '../context'; 
import { Link } from 'react-router-dom';

class Cathegories extends Component { 
  render() {  
    return ( 
    <section>
      <div className="container"> 
        <div className="row">
          <ProductConsumer>
            {value =>{
              return value.cathegory.map((cathegory, index) =>{
                return (
                    <div className="col-4" key={index}>
                            <div className="cat-anim">
                                <img src={window.location.origin + '/'+ cathegory.img } alt={cathegory.name} /> 
                                <div className="caption"><Link to={"/cathegory/"+cathegory.id } onClick={ () => value.handelcatDetail(cathegory.id)}><h5>{cathegory.name}</h5></Link></div>
                                <div className="overlay"></div>
                            </div>
                        </div>
                )
              })
            }}
          </ProductConsumer>
        </div>
      </div>
      </section>
     );
  }
}
 
export default Cathegories;
