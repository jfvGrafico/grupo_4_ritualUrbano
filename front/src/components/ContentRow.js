import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';


function ContentRow() {

    const [productos, setProductos] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((products) => {
            setProductos(products);
          })
          .catch((error) => console.log(error));
    }, [])

    useEffect(() => {
      fetch("http://localhost:3001/api/products/category")
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((categorys) => {
          setCategorias(categorys);
        })
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3001/api/users/")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((users) => {
            //console.log(movies)
            setUsuarios(users);
          })
          .catch((error) => console.log(error));
    }, [])

    let productInDataBase = {
        color: "success",
        titulo: "Total de productos",
        valor: productos.meta?.count || "-",
        icono: "fas fa-shopping-cart"
    }
    
    let amount = {
        color: "success",
        titulo: "Total de usuarios",
        valor: usuarios.meta?.count || "-",
        icono: "fas fa-user",
    }
    
    let user = {
        color: "success",
        titulo: "Total de categorías",
        valor: categorias.meta?.count || "-",
        icono: "fas fa-clipboard-list",
    }

    let cardProps = [productInDataBase, amount, user];

    return (
        <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {
                    cardProps.map((producto, index) => {
                        return <SmallCard  {...producto} key={index} />
                    })
                }
            </div>
        </React.Fragment>
    )
}
export default ContentRow;