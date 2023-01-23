import React from 'react';

function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>{props.precio}</td>
                <td>{props.color}</td>
                <td>{props.stock}</td>
                <td>{props.category.nombre}</td>
               

            </tr>
        </React.Fragment>
    )
}
export default ProductList;