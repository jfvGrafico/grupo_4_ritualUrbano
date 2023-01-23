import React ,{ useEffect } from 'react';
import Categoria  from './Categoria';
import { useState } from 'react';

function CategoriaInDb() {

    const [ categoryList, SetCategoriasList ]= useState([])  

   useEffect( () => {
    fetch('http://localhost:3030/api/categorias')
            .then( respuesta => {
                return respuesta.json()
            })
            .then(categorias => {
                
                SetCategoriasList(categorias.categorias)
            })

            
   }, [])
   
   
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6    className="m-0 font-weight-bold text-gray-800">Categorías de productos en DB</h6>
                            </div>
                            <div className="card-body fondoCaja">
                                <div className="row">
                                    {
                                        
                                        categoryList.map((category, index)=>{
                                            
                                            return  <Categoria  {...category}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        
        )
    }


export default CategoriaInDb;