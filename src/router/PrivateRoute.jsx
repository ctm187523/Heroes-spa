
//creamos un high order component un componente que envuelve otros componentes y los
//componentes que envuelva seran rutas privadas, contiene como argumento el children
//que seran los componentes que contiene el PrivateRoute, si ponemos en le navegador 
//sin estar autenticados localhost:5173/marvel sin estar autenticados no nos debe dejar entrar

import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext"

export const PrivateRoute = ({ children }) => {

    //usamos el hook useContext para recibir la informacion del AuthProvider.jsx, queremos saber
    //si el usuario esta autenticado, usamos la variable logged linea 14 AuthProvider.jsx
    const { logged } = useContext(AuthContext);

    //usamos el Hook useLocation de React para que cuando un usuario haga logout y vuelva a loggearse
    //se habra en la pagina que habia dejado por ultima vez, del useLocation desestructuramos el 
    //pathname y el search 
    const { pathname, search } = useLocation();

    const lastPath = pathname + search; //obtenemos la ruta visitada

    localStorage.setItem('lastPath', lastPath ); //guardamos en el localStorage la ruta

    //retornamos el children(los hijos) en caso de que este loggeado, en caso contrario lo mandamos a la pantalla de login
    //para ello usamos un ternario condicional
    return (logged)
        ? children
        : <Navigate to="/login" />
}
