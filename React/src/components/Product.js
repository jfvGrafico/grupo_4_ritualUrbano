//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


//Importar nuestro componente
// import ProductList from './ProductList';
import "../assets/css/allProducts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";




function Product() {
    const [products, setProducts] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(0);


    useEffect(() => {
        fetch(`http://localhost:3030/api/products?page=${page}`)
            .then((response) => response.json())
            .then((products) => {
                setProducts(products.products);
                setLimit(products.count);
            });
    }, [page]);
    console.log(products);

    let totalPages = Math.ceil(limit);

    function handleClickNext() {
        if (page < totalPages) {
            setPage(page + 1)
        }
    }
    function handleClickPrev() {
        if (page > 0) {
            setPage(page - 1)
        } else {
            setPage(page - 0)
        }
    }

    return (

        <>
            {products ? (
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Color</th>
                                        <th>Stock</th>
                                        <th>Categoría</th>
                                        <th>Detalle</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Color</th>
                                        <th>Stock</th>
                                        <th>Categoría</th>
                                        <th>Detalle</th>
                                    </tr>
                                </tfoot>
                                <tbody>


                                    {products.map((product, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{product.id}</td>
                                                <td>{product.nombre}</td>
                                                <td>{product.precio}</td>
                                                <td>{product.color}</td>
                                                <td>{product.stock}</td>
                                                <td>{product.category.nombre}</td>
                                                <td> <Link to={`/product-detail/${product.id}`} className='linkTo'><button>Acceder al detalle</button></Link></td>


                                            </tr>


                                        );
                                    })}

                                </tbody>
                            </table>

                            <div className="buttonPages">
                                <p>Anterior</p>
                                <FontAwesomeIcon className="button-Icons" icon={faArrowLeft} onClick={handleClickPrev} />
                                <p>{page + 1}</p>
                                <FontAwesomeIcon className="button-Icons" icon={faArrowRight} onClick={handleClickNext} />
                                <p>Siguiente</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                "Cargando"
            )
            }
        </>
    );
};


export default Product;
