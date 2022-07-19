import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

    //usamos el customHook useParams creado por React, recibimos los params en este caso
    //el id que hemos colocado en la linea 21 del componente HeroesRoutes.jsx, lo desestructuramos
    const { id } = useParams();

    //usamos el customHook de React useNavigate()
    const navigate = useNavigate();

    //llamamos a la funcion getHeroById del archivo getHeroById.js para que busque el personaje en funcion del id
    //usamos el Hook de React useMemo para cuando el id cambie dispare la funciom que trae el nuevo heroe
    //si no cambia se mantiene igual no se redibuja lo memorizamos y evitamos que se vuelva a cargar sin el tambien
    //funcionaria todo bien pero lo hacemos por si algo recarga la pagina no vuelva a hacer la peticion
    const hero = useMemo( () =>  getHeroById(id), [id]);

    //funcion para regresar atras
    const onNavigateBack = () =>{
        //usamos el customHook useNavigate declarado en la linea 11 para que vuelva a la pagina anterior
        navigate(-1);
    }

    //en caso de no encontrar el heroe lo redirigimos a /marvel usando Navigate
    if (!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    //img-thumbnail le da el borde redondeado a la imagen
                     // usamos la animacion obtenida de la pagina animate.css ver video 198 usamos img-thumbnail animate__animated animate__fadeInLeft
                     //este efecto hace que aparezca por la izquierda la imagen
                    className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"> <b>First appereance:</b> {hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3"> Characteres </h5>
                <p>{hero.characters}</p>
                <button
                    className="btn btn-outline-info"
                    onClick={ onNavigateBack }
                >
                    Regresar
            </button>
            </div>
        </div>

    )
}
