import './product.css';
import React,{useContext} from 'react';
import AppContext from '../../store/app-context';
import Load from '../../UI/Loader/Load';

function Product({id,image,name}){
    const {addtocart}=useContext(AppContext);
    
    return (
        <div className="product-card">
            <img src={require(`../../images/${image}`)} alt="product" />
            <div className="product-name">{name}</div>
            <button className="product-name-button" onClick={()=>addtocart(name,id,image)}>Add to Cart</button>
        </div>
    );
}

function Products(){

    const {products,loadding}=useContext(AppContext);

    if(loadding){

        return(
            <div>
                <Load />
            </div>
        )
    }

    return (
        <div className="products-container">
        {
            Object.keys(products).map((k) => (
                <Product key={k} id={products[k].id} image={products[k].image} name={products[k].name} />
            ))
        }
        </div>
    );
}

export default Products;
