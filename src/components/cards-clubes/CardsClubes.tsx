import React from 'react'
import { useSelector } from 'react-redux'
import { clubesSelector } from '../../store/module/clubes/selectors'
import styles from './CardsClubes.module.css'

const CardsClubes = () => {
    const store = useSelector(clubesSelector)
    console.log(store)
     
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {store.clubes.map((clubes:any) => (
            <div className="col" key={clubes.id}>
                <div className={`card h-100 ${styles.cardStyle}`} >
                        <div className="row g-0">
                            <div className="col-md-4">                                
                                <img height="100%" width="100%" src={clubes.logo} alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-center">                                    
                                    <h5 className="card-title">{clubes.equipo}</h5>
                                    <p>{clubes.categoria}</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        ))} 
        </div>
    )
}

export default CardsClubes
