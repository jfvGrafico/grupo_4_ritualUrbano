import React from 'react';

function Category(props) {
    return (
        <React.Fragment>
            <div className="col-lg-8 mb-4 mx-auto">
                <div className="card text-white bg-dark shadow">
                    <div className="card-body">
                        {props.nombre}: {props.total}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Category;