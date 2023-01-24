import React, {useState, useEffect} from 'react';
import '../assets/css/style.css'

function LastProductInDb(){

    const [lastProduct, setLastProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/product/api')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(product => {
                //console.log(movies)
                setLastProduct(product.data.products.pop())
                /* console.log(product.data.products.pop()) */

            })
            .catch(error => console.log(error))
    }, [])

    console.log(lastProduct)

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
                </div>
                <div className="card-body bg-gray-200">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={`http://localhost:3000/img/${lastProduct.img}`} alt=" producto "/>
                    </div>
                    <h4>{lastProduct.titulo}</h4>
                    <p>{lastProduct.longDesc}</p>
                    <a className="btn detail-pixel text-dark fw-bold" target="_blank" rel="nofollow" href={`http://localhost:3000/product/detail/${lastProduct.id}`}>Ver detalle de producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
