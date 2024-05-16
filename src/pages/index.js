// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import Link from "next/link";
import PerfectBanner from "./PerfectBanner";
import Newsletter from "./Newsletter";
// import {client} form "../lib/client"

export default function Home() {
  return (
    <div>
      <div className="frontlogo">
        <div className="banner">
          <span className="tagline">Luxaury mac made by hand</span>
          <span>
            <Link className="shop-now" href="/shop">
              Shop Now
            </Link>
          </span>
        </div>
      </div>
      <div className="intro">
        <p>
          Welcome to Macaron Magic - the home of great-tasting, luxurious
          macarons, made by hand here in our workshop in the Peak District.
        </p>
        <p>
          We have carefully chosen a select range of flavors for your delight,
          ready for you to enjoy - just imagine...biting into each one, where it
          practically melts in your mouth...yum!
        </p>
        <p>
          To start, browse over to our shop where you will see the full range
          available - well be adding more over time. If you have any questions,
          please do let us know - our contact details are at the bottom of this
          page.
        </p>
        <PerfectBanner />
        <Newsletter />
      </div>
    </div>
  );
}
