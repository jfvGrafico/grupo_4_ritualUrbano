//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';
//Importar nuestro componente
import UserList from './UserList';

class User extends Component{
    constructor(){
        super()
        this.state ={
            users : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('http://localhost:3030/api/users')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(user =>{
            this.setState({users: user.data})
        })
        .catch(error => console.log(error))
    }
    render(){
        return (
            <React.Fragment>
            {/*<!-- User LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Todos los usuarios en la Base de Datos</h1>
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Nick</th>
                                    <th>Email</th>
                                    <th>País</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Nick</th>
                                    <th>Email</th>
                                    <th>País</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    //console.log(this.state.users)
                                    this.state.users.map((user,index)=>{
                                        return <UserList  {...user} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    </React.Fragment>
    )
    }
}
export default User;