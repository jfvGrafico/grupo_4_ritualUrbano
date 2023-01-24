import React from 'react';
import image from '../assets/images/logo-horizontal.png';
import { Route, Link, Routes } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import ContentRow from './ContentRow';
import Error404 from './Error404';
import Products from './Products';
import CategoriesInDb from './Categories';
import LastProductInDb from './LastProductInDb';
import '../assets/css/style.css'

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav sidebar-dashboard sidebar sidebar-dark accordion" id="accordionSidebar ">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon logo-pixel">
                        <img className="w-75" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/categories">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/last-product">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/statistics">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Estadísticas</span>
                    </Link>
                </li>

                {/* tabla */}
                <li className="nav-item">
                    <Link className="nav-link" to='/table'>
                        <i className="fas fa-fw fa-film"></i>
                        <span>Tabla de productos</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route exact path='/' element={<ContentWrapper/>} />
                <Route path='/categories' element={<CategoriesInDb />} />
                <Route path='/last-product' element={<LastProductInDb />} />
                <Route path='/statistics' element={<ContentRow />} />
                <Route path='/table' element={<Products />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
            
        </React.Fragment>
    )
}
export default SideBar;