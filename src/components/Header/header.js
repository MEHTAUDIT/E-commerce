import "./header.css";
import { useState } from "react";

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
        {showcart && 
          <div className="backdrop" onClick={closecart}>
            <div className="modal">Hello from cart</div>
          </div>
        }
      </div>
    </div>
  );
}

export default Header;
