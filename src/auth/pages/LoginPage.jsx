import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

    //usamos el custom hook  no creado por React useNavigate pero incorporado en las librerias
    //para usuar sus metodos de navegacion
    const navigate = useNavigate();

    const onLogin = ()=>{

        navigate('/', { //le decimos que nos lleve a la pagina de inicio de la aplicacion al hacer login
            replace: true // el replace evita que el usuario pueda regresar al historial anterior porque lo estamos remplazando
        }); 
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick= { onLogin }
                >
                Login
           </button>
        </div>
    )
}
