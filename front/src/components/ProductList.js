import React from 'react';

function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <th>{props.id}</th>
                <th>{props.nombre}</th>
                <th>{props.descripcion}</th>
                <th>{props.peso}</th>
                <th>${props.precio}</th>
                <th>{props.CategoryProduct?.nombre}</th>
            </tr>
        </React.Fragment>
    )
}
export default ProductList;