import React from 'react';
import image from '../assets/images/buildreams.png';
import { Route, Link, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import ContentWrapper from './ContentWrapper';
import CategoriaInDb from './CategoriaInDb';
import LastProductInDb from './LastProductInDb';
import ContentRowProducts from './ContentRowProducts';
import Error404 from './Error404';
import Product from './Product';
import User from './User'

function SideBar() {
    let [products, setProducts] = useState([])

    let getProducts = async () => {
        await fetch('http://localhost:3030/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }
    useEffect(() => {
        getProducts()
    }, [])

    let [users, setUsers] = useState([])

    let getUsers = async () => {
        await fetch('http://localhost:3030/api/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Buildreams" />
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-pencil-ruler text-warning"></i>
                        <span>Dashboard - Buildreams</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/CategoryInDb">
                        <i className="fas fa-fw fa-folder text-primary"></i>
                        <span>Categorías de productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-barcode text-ligth"></i>
                        <span>Último producto añadido</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ContentRowProducts">
                        <i className="fas fa-fw fa-table text-success"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                {/* tabla */}
                <li className="nav-item">
                    <Link className="nav-link" to="/table">
                        <i className="fas fa-dolly-flatbed text-danger"></i>
                        <span>Tabla de productos</span>
                    </Link>
                </li>

                 {/* tabla */}
                 <li className="nav-item">
                    <Link className="nav-link" to="/table2">
                        <i className="far fa-address-card text-primary"></i>
                        <span>Tabla de usuarios</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route exat path='/' element={<ContentWrapper />} />
                <Route path='/CategoryInDb' element={<CategoriaInDb />} />
                <Route path='/LastProductInDb' element={<LastProductInDb />} />
                <Route path='/ContentRowProducts' element={<ContentRowProducts products={products} users={users} />} />
                <Route path='/table' element={<Product />} />
                <Route path='/table2' element={<User />} />
                <Route path='*' element={<Error404 />} />
            </Routes>

        </React.Fragment>
    )
}
export default SideBar;