import "./header.css";
import { useState } from "react";
import Modal from "../Modal/modal";

function Header() {
  const [showcart, setshowcart] = useState(false);

  function opencart() {
    setshowcart(true);
  }

  function closecart() {
    setshowcart(false);
  }

  return (
    <div className="header">
      <h1>My React Store</h1>
      <div className="header-cart">
        <button className="yellow-button" onClick={opencart}>
          Cart
        </button>

        <Modal showcart={showcart} closecart={closecart}>Hello from Cart</Modal>

      </div>
    </div>
  );
}

export default Header;
