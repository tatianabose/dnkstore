import React from "react";
import RelatedProducts from "../components/RelatedProducts";
import EndSection from "../components/EndSection";

function Additional() {
  return (
    <div>
      <section className="additional">
        <h3> Additional information</h3>
        <div className="additional-info">
          <a>color</a>
          <p>Aqua</p>
        </div>
      </section>
      <RelatedProducts />
      <EndSection />
    </div>
  );
}

export default Additional;
