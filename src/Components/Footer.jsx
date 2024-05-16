import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import PaymentIcons from "./PaymentIcons";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div>
            <Link href="/delevery">Delivery</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms and Conditions of Sale</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div>Contact: hello@macaronmagic.com</div>
          {/* <MiniCart /> */}
        </div>
        <div className="icon-container">
          <PaymentIcons />
          <div className="icons">
            <AiFillInstagram />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
      <p className="copyright">2022 Macron Magic All rights reserved</p>
    </>
  );
};

export default Footer;
