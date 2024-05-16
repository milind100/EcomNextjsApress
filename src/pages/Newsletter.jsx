import React from "react";
import newsletter from "../../public/newsletter.jpg";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <form action="/send-data-here" method="post" className="email-signup">
        <span>Join our NewsLertter</span>
        <input type="text" id="first" name="first" placeholder="First Name" />
        <input type="text" id="last" name="last" placeholder="Last Name" />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email address"
        />
        <button type="submit">Submit</button>
      </form>
      <span className="newsletter-imag">
        <Image src={newsletter} alt="newsletter" width={500} height={500} />
      </span>
    </div>
  );
};

export default Newsletter;
