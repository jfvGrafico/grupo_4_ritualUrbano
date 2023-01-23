import React from "react";
import ProductDetailData from "../components/ProductDetailData";
import "../assets/css/ProductDetail.css";

function ProductDetail() {
    return <div className="content-wrapper">

        {/* componente con la información */}
        <ProductDetailData/>
        
    </div>
  }

export default ProductDetail;
