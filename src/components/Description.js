import React from "react";
import ProductImg from "./ProductImg";
import RelatedProducts from "../components/RelatedProducts";
import EndSection from "../components/EndSection";

function DescriptionNav() {
  return (
    <div>
      <section className="for-des-bg">
        <div className="for-des">
          <h5>Description</h5>

          <h4>Product description</h4>
          <p>
            Since it’s creation lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>

        <ProductImg />
      </section>
      <RelatedProducts />
      <EndSection />
    </div>
  );
}

export default DescriptionNav;
