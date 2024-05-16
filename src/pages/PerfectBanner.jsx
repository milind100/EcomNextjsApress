import Image from "next/image";
import React from "react";
import perfectimage from "../../public/perfect.jpg";

const PerfectBanner = () => {
  return (
    <div className="perfect-occasions">
      <div>
        <Image src={perfectimage} alt="perfect" width={500} height={500} />
      </div>
      <div className="perfect-message">
        <p>Perfect for</p>
        <p>special occasions</p>
        <p>
          Share the love and give every guest a little explosion of sweetness
          with our show-stopping macaron towers. Perfect for weddings,
          anniversaries and parties. You could even add a touch of luxury to
          party bags and wedding favors with these perfect bite-sized treats.
        </p>
      </div>
    </div>
  );
};

export default PerfectBanner;
