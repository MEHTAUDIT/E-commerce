import "./header.css";
import { useState } from "react";

function Header() {
  const [showcart, setshowcart] = useState(false);

  function handleClick() {
    setshowcart(true);
  }

  return (
    <div className="header">
      <h1>My React Store</h1>
      <div className="header-cart">
        <button className="yellow-button" onClick={handleClick}>
          Cart
        </button>
        {showcart && 
          <div className="backdrop">
            <div className="modal">Hello from cart</div>
          </div>
        }
      </div>
    </div>
  );
}

export default Header;
