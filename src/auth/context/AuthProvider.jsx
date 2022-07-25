import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

const initialState = {}

const init = () =>{

    const user = JSON.parse( localStorage.getItem('user') );

    //si user regresa null quiere decir que no se ha logueado el usuario
    return{
        logged: !!user, //si el user existe sera true si existe pasamos el user
        user: user,
    }
}

//creamos el proveedor del contexto ver React/hool-app/src/useContext
export const AuthProvider = ({ children }) => {

    //usamos el Hook de React useReducer y le pasamos el componente authReducer.jsx creado por nosotros
    //usamos el init para inicializar el estado con el localstorage
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    //funcion para el loggin
    const login = (name = '') => {

        const user = { id: 'ABC' , name}

        //creamos la action que mandaremos a la funcion dispatch del Hook useReducer
        const action = {
            type: types.login,
            payload: user
        }

         //guardamos el user en el localStorage
         localStorage.setItem('user', JSON.stringify(  user ));

        //llamamos la accion con la funcion dispatch
        dispatch(action);
    }

    //funcion para el logout
    const logout = () =>{
    
        //borramos la informacion del localStorage
        localStorage.removeItem('user');

        //creamos la action que mandaremos a la funcion dispatch del Hook useReducer en este caso el logout
        //ver authReducer.js
        const action = {
            type: types.logout,
        };

        //mandamos la accion
        dispatch(action);
    }

    return (
        //pasamos en el value los valores que necesitamos pasar a todos los componentes que lo contengan
       //pasmaos el authState desestructurado que por defecto es el initialState y la funcion login y logout
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout
        }}>
            { children}
        </AuthContext.Provider>
    );
}
