import product_data from '../../data/MOCK_DATA.json';
import './product.css';

function Product({id,image,name}){
    return (
        <div className="product-card" key={id}>
            <img src={require(`../../images/${image}`)} alt="product" />
            <div className="product-name">{name}</div>
            <button className="product-name-button">Add to Cart</button>
        </div>
    );
}

function products(){
    return (
        <div className="products-container">
        {
            product_data.map((product) => (
                <Product key={product.id} id={product.id} image={product.image} name={product.name} />
            ))
        }
        </div>
    );
}

export default products;
