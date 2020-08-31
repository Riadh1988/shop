import React, {Component} from 'react'; 
import {storeProducts, detailProduct, genres} from './data';
 

const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = { 
        products : [],
        detailProduct : detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0,
        cathegory: [],
        genreCat:1

     } 
     componentDidMount(){
         
        this.setCathegory();
        this.setProducts();
        this.setState(
            {cart : !localStorage.getItem('myCart') ? []: JSON.parse(localStorage.getItem('myCart')),
        
        }
            )
     }   
     setCathegory = ()=>{
        let cathegory = [];
        genres.forEach(cat =>{
            const singleCathegory = {...cat}
            cathegory = [...cathegory, singleCathegory]

        })
        this.setState(() =>{
            return{cathegory}
            
        } )
    }
    setProducts = ()=>{
        let products = [];  
         
            storeProducts.forEach(item =>{
                const singleItem = {...item}
                products = [...products, singleItem] 
            })
         
        
        this.setState(() =>{
            return{products}
        } )
    } 

    getItem = (id)=>{
        const product = this.state.products.find(item => item.id === id)
        return product;
    }
    
    handelDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }
    

    addToCart = (id) => {
        let tempProducts= [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
          return {products:tempProducts, cart:[...this.state.cart,
          product] };
        }, () => { 
                 this.addTotals();
                 localStorage.setItem('myCart', JSON.stringify(this.state.cart))
                 });
    }
    handelcatDetail = (id)=>{
        const catid = id
        this.setState(() => {
            return{genreCat: catid}
        })
    }
    openModal = id => {
        const product = this.getItem(id)
        this.setState(()=>{
            return{
                modalProduct:product,modalOpen:true
            }
        })
    }
     
    closeModal = () => {
        this.setState(() =>{
            return {modalOpen :false}
        })
    } 
    decrement = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if(product.count === 0) {
        this.removeItem(id);
        }
        else {
        product.total = product.count * product.price;
        }

        this.setState(() => {
        return{cart: [...tempCart]}
        }, () => {
        this.addTotals()
        })
    }
    increment = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
    
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
    
        product.count = product.count + 1;
        product.total = product.count * product.price;
    
        this.setState(() => {
          return{cart: [...tempCart]}
        }, () => {
          this.addTotals()
        })
    }
    removeItem = (id)=>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
    
        tempCart = tempCart.filter(item => item.id !== id);
    
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
    
        this.setState(() => {
          return {
            cart: [...tempCart],
            products: [...tempProducts]
          }
        }, () => {
          this.addTotals();
        })
    }
    clearCart = ()=>{
        this.setState(() => {
            return { cart: [] }
          }, () => {
            this.setProducts();
            this.addTotals();
          });
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
          return {
            cartSubTotal:subTotal,
            cartTax:tax,
            cartTotal:total
          }
        })
      };
    render() {   
        return (  
            <ProductContext.Provider value={{
                ...this.state,
                handelcatDetail:this.handelcatDetail,
                handelDetail:this.handelDetail, 
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                decrement:this.decrement,
                increment:this.increment,
                removeItem:this.removeItem,
                clearCart:this.clearCart

            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider , ProductConsumer} ;