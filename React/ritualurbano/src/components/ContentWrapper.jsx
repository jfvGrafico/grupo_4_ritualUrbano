
import React from 'react'
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import TopBar from './TopBar';

const ContentWrapper = () => {
  return (
    <>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />
          <ContentRowTop />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ContentWrapper