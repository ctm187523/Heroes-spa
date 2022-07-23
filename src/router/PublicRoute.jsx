
//creamos un high order component un componente que envuelve otros componentes y los
//componentes que envuelva seran rutas publicas, contiene como argumento el children
//que seran los componentes que contiene el PrivateRoute,  si ponemos en le navegador 
//estando autenticados localhost:5173/login no nos debe dejar entrar

import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth"


export const PublicRoute = ({ children }) => {

    //usamos el hook useContext para recibir la informacion del AuthProvider.jsx, queremos saber
    //si el usuario esta autenticado

    const { logged } = useContext(AuthContext);

    //retornamos el children(los hijos) en caso de que no este loggeado,
    return ( !logged )
        ? children
        : <Navigate to="/marvel" />
}
