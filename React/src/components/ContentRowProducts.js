import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState } from 'react';

function ContentRowProducts() {

    const [products, setProducts] = useState([])


    const getProducts = () => {

        fetch('http://localhost:3030/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }
    useEffect(() => {
        getProducts()
    }, [])

    const [users, setUsers] = useState([])

    const getUsers = () => {

        fetch('http://localhost:3030/api/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
    }
    useEffect(() => {
        getUsers()
    }, [])


    let productInDataBase = {
        color: "primary",
        titulo: "Cantidad de Productos",
        valor: products.count || 0,
        icono: "fas fa-boxes",
        colorIcon: "text-primary",
    }

    let productosEnOferta = {
        color: "info",
        titulo: "Cantidad de productos en oferta",
        valor: products.enOferta || 0,
        icono: "fas fa-piggy-bank",
        colorIcon: "text-info",
    }
 
    let amount = {
        color: "success",
        titulo: "Cantidad de Usuarios",
        valor: users.count || 0,
        icono: "fas fa-users",
        colorIcon: "text-success",
    }

    let user = {
        color: "warning",
        titulo: "Usuarios Administradores",
        valor: users.admin || 0,
        icono: "fas fa-user-shield",
        colorIcon: "text-warning",
    }
   
    let cardProps = [productInDataBase, productosEnOferta, amount, user];

    return (
        <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {
                    cardProps.map((producto, user, index) => {
                        return <SmallCard  {...producto} key={index} />
                    })
                }
            </div>
        </React.Fragment>
    )
}
export default ContentRowProducts;