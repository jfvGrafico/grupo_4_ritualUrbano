import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Products from './Products';
import Footer from './Footer';
import '../assets/css/style.css'

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <TopBar/>
                <div id="content">
                    <ContentRowTop />
                    <Products />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;