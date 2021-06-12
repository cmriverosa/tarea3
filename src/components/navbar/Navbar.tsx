import { Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand">Ejercicio 03</span>                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">                        
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Inicio</Link>                                
                            </li>
                            <li className="nav-item">
                            <Link to="/register" className="nav-link">Registro</Link>                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
    )
}
export default Navbar