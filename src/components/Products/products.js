import product_data from '../../data/MOCK_DATA.json';
import './product.css';
import React from 'react';

function Product({id,image,name,addtocart}){
    return (
        <div className="product-card">
            <img src={require(`../../images/${image}`)} alt="product" />
            <div className="product-name">{name}</div>
            <button className="product-name-button" onClick={()=>addtocart(name)}>Add to Cart</button>
        </div>
    );
}

function products({addtocart}){
    return (
        <div className="products-container">
        {
            product_data.map((product) => (
                <Product key={product.id} id={product.id} image={product.image} name={product.name} addtocart={addtocart}/>
            ))
        }
        </div>
    );
}

export default products;
