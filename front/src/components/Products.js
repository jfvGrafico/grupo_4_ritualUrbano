//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import '../assets/css/style.css'

//Importar nuestro componente

function Products () {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((products) => {
            //console.log(products);
            setProductos(products.data.products);
          })
          .catch((error) => console.log(error));
    }, [])

    //console.log(productos);

    return (
        <>
            {/*<!-- MOVIES LIST -->*/}

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4 m-5 bg-gray-200">
            <h1 className="h3 text-gray-800 p-2">Productos en la base de datos</h1>
                <div className="card-body bg-gray-200">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped" id="dataTable" width="100%">
                            <thead className='table-success'>
                                <tr className='text-dark'>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Peso</th>
                                    <th>Precio</th>
                                    <th>Categoría</th>
                                </tr>
                            </thead>
                            <tfoot className='table-success'>
                            <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Peso</th>
                                    <th>Precio</th>
                                    <th>Categoría</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    productos.map((producto, index) => {
                                        return (
                                            <ProductList {...producto} key={index} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Products;
