import React ,{ useEffect } from 'react';
import Genre  from './Categoria';
import { useState } from 'react';

function GenresInDb() {

    const [ genresList, SetGenresList ]= useState([])  

   useEffect( () => {
    fetch('/api/genres')
            .then( respuesta => {
                return respuesta.json()
            })
            .then(genres => {
                
                SetGenresList(genres.data)
                
            })


   }, [])


    


        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6    className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className="card-body fondoCaja">
                                <div className="row">
                                    {
                                        genresList.map((genre,index)=>{
                                            return  <Genre  {...genre}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        
        )
    }


export default GenresInDb;