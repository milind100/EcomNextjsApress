import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";
import Link from "next/link";
// const { showCart, setShowCart, totalQuantities } =useStateContext();
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="company-name">
        <Link href="/">Mangez Macaron</Link>
        <div className="navbar" logo="true">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>

          <button className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{/* {totalQuantities} */}</span>
          </button>
          {/* {showCart && <Cart />} */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
