import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt, faCrown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import ListClubes from '../list-clubes/ListClubes'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clubesSelector } from '../../store/module/clubes/selectors'
import { addClubAction, editClubAction } from '../../store/module/clubes/actions'
import alerta from 'sweetalert2'

const FormClubes = () => {

    const alertError = () =>{
        alerta.fire({
            icon: 'error',
            text: 'Complete los campos',
            // footer: 'Lo contactaremos a la brevedad.'
        }) 
    }
    
    const [equipo, setEquipo] =  useState('');
    const [categoria, setCategoria] =  useState('');
    const [logo, setLogo] =  useState('');
    const [id, setId] = useState('')
    
    // const [dataTeam, setDataTeam] = useState({equipo:'', id:'',categoria:'', logo:''})
    const [modoEdicion, setModoEdicion] = useState(false)

    const dispatch = useDispatch()
    const storeClubes = useSelector(clubesSelector)
    // console.log(store)
    const handlerEquipoChange = (event:any) => {
        setEquipo(event.target.value)
    }
    const handlerCategoriaChange = (event:any) => {
        setCategoria(event.target.value)
    }
    const handlerUrlChange = (event:any) => {
        setLogo(event.target.value)
    }
    const handlerAgregar = (event:any) => {

        event.preventDefault()
        if(equipo.length === 0 || categoria.length === 0 || logo.length===0){
            alertError()            
            
        }else{
            const club = {
                id: new Date().getTime(),
                equipo:equipo,
                categoria: categoria,
                logo: logo
            }
            // console.log(club)
            dispatch(addClubAction(club))
        }
        
    }
    const handlerEdit = (data:any) =>{
        
        const {id,equipo,categoria,logo} = data        
        setEquipo(equipo)
        setCategoria(categoria)
        setLogo(logo)
        setId(id)
        setModoEdicion(true)
    }
    const handlerEditClub = (event:any) =>{         
        event.preventDefault()

        if(equipo.length === 0 || categoria.length === 0 || logo.length===0){
            alertError()            
        }else{
            dispatch(editClubAction({id,equipo,categoria,logo}))
            setEquipo('')
            setCategoria('')
            setLogo('')
            setId('')
            setModoEdicion(false)
        }
    }
    const handlerClear = (event:any) =>{
        event.preventDefault()   
        setEquipo('')
        setCategoria('')
        setLogo('')
        setId('')
        setModoEdicion(false)
    }
    return (
        <div className="container">
            
                <form>
                    <div className="card mt-5">
                        <div className="card-header d-flex justify-content-center">
                            {
                                modoEdicion ? 'Editar Club' : 'Registro de Clubes'
                            }
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faTshirt}/></span>
                                <input type="text" className="form-control" placeholder="Nombre Equipo" aria-label="Nombre Equipo" aria-describedby="basic-addon1" onChange={handlerEquipoChange} value={equipo}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faCrown}/></span>
                                <input type="text" className="form-control" placeholder="Categoria" aria-label="Categoria" aria-describedby="basic-addon1" onChange={handlerCategoriaChange} value={categoria}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faExternalLinkAlt}/></span>
                                <input type="text" className="form-control" placeholder="url Escudo" aria-label="url Escudo" aria-describedby="basic-addon1" onChange={handlerUrlChange} value={logo}/>
                            </div>
                            <div className="d-flex justify-content-center">                                
                                <button className="btn btn-dark btn-sm" onClick={modoEdicion ? handlerEditClub : handlerAgregar}>{modoEdicion ? 'Editar': 'Agregar'}</button>

                                <button className="btn btn-dark btn-sm ms-3" onClick={handlerClear}>Limpiar</button>

                            </div>
                        </div>
                    </div>
                </form>
                <hr/>
                <ListClubes handlerEdit={handlerEdit}/>
            
        </div>
    )
}

export default FormClubes
