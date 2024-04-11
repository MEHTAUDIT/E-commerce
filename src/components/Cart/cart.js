import Modal from "../Modal/modal";
import "./cart.css";

function CartItem({name,id,image,quentity,incresequentity,decresequentity}){
    return (
        <div className="cart-item">
            {console.log(image)}
            <div className="cart-item-image">

                <img src={require(`../../images/${image}`)} alt="product" />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-name">{name}</div>
                <div className="cart-item-qunatity">Quantity: {quentity}
                    <button className="change-quentity" onClick={()=>incresequentity(id)}>+</button>
                    <button className="change-quentity" onClick={()=>decresequentity(id)}>-</button>
                </div>
            </div>
        </div>
    );
}

function Cart({showcart,closecart,cartitem,incresequentity,decresequentity}){

    return (
    <Modal show={showcart} onclose={closecart}>
        <div className="cart-heading"><h2>Cart</h2></div>
        {console.log(cartitem.length)}
        {cartitem.length>0 ? cartitem.map((item) => (
            <CartItem key={item.name} name={item.name} id={item.id} image={item.image} quentity={item.quentity} incresequentity={incresequentity} decresequentity={decresequentity}/>
        )):"Cart is Empty"}

        <div className="close-cart">
            <button className="yellow-button" onClick={closecart}>Close</button>
        </div>

    </Modal>
    );
}

export default Cart;
