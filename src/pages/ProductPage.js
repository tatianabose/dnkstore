import React from "react";
import DNav from "../components/DNav";
import ProductsNav from "../components/ProductsNav";
import ProductTop from "../components/ProductTop";

function ProductPage() {
  return (
    <div>
      <ProductsNav />
      <ProductTop />
      <DNav />
    </div>
  );
}

export default ProductPage;
