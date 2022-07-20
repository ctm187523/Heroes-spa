import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    //usamos el custom hook  no creado por React useNavigate pero incorporado en las librerias
    //para usuar sus metodos de navegacion
    const navigate = useNavigate();

    //funcion para salir de la aplicacion, usamos el CustomHook declarado arriba linea 8
    const onLogOut = () => {
        navigate('/login', { //le decimos que nos lleve a la pagina de login
            replace: true // el replace evita que el usuario pueda regresar al historial anterior porque lo estamos remplazando
        });

    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* importamos y usamos NavLink  creamos un ternario diciendo que si la pagina esta activa
                        osea que se esta viendo en ese momento aplicamos la classe de bootstrap nav-link con el atributo
                        active para que salga resaltado en caso contrario '' es decir no active*/}
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary">
                        Climent
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogOut}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}