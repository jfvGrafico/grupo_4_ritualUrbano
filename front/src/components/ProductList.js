import React from 'react';

function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <th>{props.id}</th>
                <th>{props.nombre}</th>
                <th>{props.descripcion}</th>
                <th>{props.descuento}%</th>
                <th><a target="_blank" href={`${props.detail}`}>{props.detail}</a></th>
                <th>${props.precio}</th>
                <th>{props.categoryProduct.nombre}</th>
            </tr>
        </React.Fragment>
    )
}
export default ProductList;