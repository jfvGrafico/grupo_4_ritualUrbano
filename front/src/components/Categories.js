import React ,{ Component, useState, useEffect } from 'react';
import Category from './Category';
import TopBar from './TopBar';


function CategoriesInDb () {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/product/api')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(categorias => {
                //console.log(movies)
                setCategorias(categorias.meta.countByCategory)

            })
            .catch(error => console.log(error))
    }, [])

        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">					
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Total de productos por categoría</h6>
                            </div>
                            <div className="card-body fondoCaja bg-gray-200">
                                <div className="row">
                                    {
                                        categorias.map((categoria,index)=>{
                                            return  <Category  {...categoria}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        
        )
    }

export default CategoriesInDb;