import React from 'react';
import CategoriaInDb from './CategoriaInDb';
import ContentRowProducts from './ContentRowProducts';
import LastProductInDb from './LastProductInDb';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Product-->*/}
					<ContentRowProducts />
					{/*<!-- End Product in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Product in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Product in DB -->*/}
						<LastProductInDb />
						{/*<!-- End content row last Product in Data Base -->*/}

						{/*<!-- Categorias in DB -->*/}
						<CategoriaInDb />

						{/*<!--End Categorias In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;