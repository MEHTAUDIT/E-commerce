import Modal from "../Modal/modal";
import "./cart.css";

function CartItem({name,id,image}){
    return (
        <div className="cart-item">
            {console.log(image)}
            <div className="cart-item-image">
                <img src={require(`../../images/${image}`)} alt="product" />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-name">{name}</div>
            </div>
        </div>
    );
}

function Cart({showcart,closecart,cartitem}){

    return (
    <Modal showcart={showcart} closecart={closecart}>
        <div className="cart-heading"><h2>Cart</h2></div>
        {console.log(cartitem.length)}
        {cartitem.map((item) => (
            <CartItem key={item.name} name={item.name} id={item.id} image={item.image}/>
        ))}

    </Modal>
    );
}

export default Cart;
