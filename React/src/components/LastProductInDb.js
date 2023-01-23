import React from 'react';
import { useState, useEffect } from 'react'

function LastProductInDb() {

       /* Fetch todos los productos */
       const [products, setProducts] = useState([])
       const getProducts = () => {
         fetch('http://localhost:3030/api/products') 
           .then((response) => response.json())
           .then((data) => setProducts(data))
       }
       useEffect(() => {
         getProducts()
       }, [])

     /* Ultimo producto agregado */
     let lastProductInDb = products.lastProductInDb
     console.log(lastProductInDb);

     return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3 card-prodSelect" >
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto añadido: {lastProductInDb?.nombre || "loading..."}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProductInDb?.pathImg || "loading..."} alt={lastProductInDb?.nombre || "loading..."}/>
                    </div>
                    <p>{lastProductInDb?.descripcion || "loading..."}</p>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
