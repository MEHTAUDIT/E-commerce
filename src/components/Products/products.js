import './product.css';
import React,{useContext} from 'react';
import AppContext from '../../store/app-context';

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

    const {products}=useContext(AppContext);
    return (
        <div className="products-container">
        {
            products.map((product) => (
                <Product key={product.id} id={product.id} image={product.image} name={product.name} />
            ))
        }
        </div>
    );
}

export default Products;
