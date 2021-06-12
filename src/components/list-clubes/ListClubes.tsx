import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPen } from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch } from 'react-redux'
import { clubesSelector } from '../../store/module/clubes/selectors'
import { deleteClubAction } from '../../store/module/clubes/actions'

const ListClubes = (props:any) => {
    const {handlerEdit} = props
    const clubes = useSelector(clubesSelector)
    const dispatch = useDispatch()
    
    const handlerClickEdit = (id:number) =>{                
        handlerEdit(clubes.clubes[id])        
    }

    const handlerClickDelete = (id:number) =>{             
        dispatch(deleteClubAction(id))
    }
    return (
        <div className="container">
            <h2>Clubes Registrados</h2>
            <table className="table table-md">
                <thead>
                    <tr>
                        <th>Nombre Equipo</th>
                        <th>Categoria</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clubes.clubes.map((clubes:any, index:number) => (
                        <tr key={index}>
                            <td>{clubes.equipo}</td>
                            <td>{clubes.categoria}</td>
                            <td>
                                <div className="d-inline-flex">
                                    <div><FontAwesomeIcon icon={faPen} size="lg" type="button" color="#dddd00" onClick={()=>handlerClickEdit(index)} title="Editar" /></div>
                                    <div className="ms-2"><FontAwesomeIcon icon={faMinusCircle} size="lg" type="button" color="red" onClick={()=>handlerClickDelete(clubes.id)} title="Eliminar"/></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListClubes
