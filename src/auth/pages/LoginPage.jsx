import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    //para usar el context almacenado en el AuthProvider debemos usar el Hook
    //de React useContext, como parametro ponemos el AuthContext.jsx creado por nosotros
    //desestructuramos y obtenemos la funcion login que es uno de los elementos pasados en el value
    const { login } = useContext(AuthContext)



    //usamos el custom hook  no creado por React useNavigate pero incorporado en las librerias
    //para usuar sus metodos de navegacion
    const navigate = useNavigate();

    const onLogin = () => {

        //queremos ver si cuando nos logueamos exite un lastPath para que cuando un usuario ha echo logout al volver al 
        //logearse vuelva a la pagina que dejo por ultima vez esto viene del componente PrivateRoute.jsx linea 20

        //obtenemos del localStorage el lastPath en caso de ser nulo devuelve '/' la pagina de inicio
        const lastPath = localStorage.getItem('lastPath') || '/';

        //usamos la funcion login obtenida arriba mediante el Hook useContext linea 10
        //la funcion login en el componente AuthProvider.jsx crea la action y mediante la funcion dispatch pasa la action al Hook userReducer
        //contenido en en el componente AuthProvider.jsx, como parametro recibe el nombre del usuario a logear
        login('Pepe Gutierrez');

        navigate( lastPath, { //le decimos que nos lleve a la pagina de inicio de la aplicacion al hacer login o a la ultima pagina dejada por el usuario ver linea 24
            replace: true // el replace evita que el usuario pueda regresar al historial anterior porque lo estamos remplazando
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
           </button>
        </div>
    )
}
