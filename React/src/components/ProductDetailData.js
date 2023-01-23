import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formatter from '../../../utils/Formatter.js';
import "../assets/css/ProductDetailData.css";

function ProductDetailData() {
    let idProduct = useParams();
    const [product, setProduct] = useState([]);

    const getItemDetail = async()=>{
        try {
            const result = await fetch(`http://localhost:3030/api/products/${idProduct.id}`)
            const productJson = await result.json();
            setProduct(productJson);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getItemDetail();
    }, []);

    return <div className="products-container">
        { product?.data && 
        <>
            <div className="product-detail-section">
            <h1 key={product.data.idProduct}>{product.data.productName}</h1>
            <div className="product-detail-data">
                <p><span>año cosecha: </span>{product.data.productHarvest}</p>
                <p><span>variedad: </span>{product.data.productVariety}</p>
                <p><span>crianza: </span>{product.data.productBreeding}</p>
                <p><span>potencial de guarda: </span>{product.data.productGuard}</p>
                <div className="product-main-data">
                    <p><span>Precio: </span>${Formatter.format(product.data.productPrice)}</p>
                    <p><span>stock: </span>{product.data.productStock}</p>
                </div>
            </div>
            <div className="product-detail-data">
                <p><span>descripción: </span>{product.data.productDescription}</p>
            </div>
        </div>
        <div className="products-related-section">
            <div className="product-detail-img">
                <img className="" src={require( `../../../Assets/images/ProductImg/${product.data.productImg}`)} alt="" /> 
            </div>
        </div>
        </>
        }
    </div>
}
export default ProductDetailData ;
