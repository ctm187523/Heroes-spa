import { Link } from "react-router-dom";

//creamos un componente para evaluar si el alter_ego recibido es igual a los characteres
//si es igual retorna vacio en caso contrario retorna los characteres, este componente
//lo usamos mas abajo
const CharactersByHero = ({ alter_ego, characters }) => {

    if (alter_ego === characters) return (<></>);

    return <p>{characters}</p>

}

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    //cargamos las imagenes segun el id recibido en la variable heroImageUrl
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    //comentamos usamos lo de arraiba en la linea 6
    //const characteresByHero = ( <p>{ characters }</p>);

    return (
        // usamos la animacion obtenida de la pagina animate.css ver video 198,usamos un fade para que las imagenes
        //vayan iluminandose progresivamente, hay mas posibilidades de animaciones
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                {/* los gutters son los espacios entre columnas */}
                <div className="row no-gutters">
                    {/* col-4 ocupa la imagen 4 de 12 espacios en el card  */}
                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" alt={superhero} />
                    </div>
                    {/* cojemos el espacio restante a 12 col-8 */}
                    <div className="col-8">

                        <div className="card-body">
                            <h5 className="card-title"> {superhero}</h5>
                            <p className="card-text"> {alter_ego}</p>
                            {/* queremos que solo salgan los personajes que han interpretado al heroe si el alterego es diferente a los characters */}

                            {/* comentamos porque lo hacemos abajo usando el componente creado
                            en este mismo archivo en la linea 6 */}
                            {/* {
                                //ponemos la condicion que de que se muestre si los characteres son diferentes al alter ego
                                (alter_ego !== characters) && characteresByHero
                                (alter_ego !== characters) && <p>{ characters }</p>
                            } */}

                            {/* usamos el componente creado en este archivo en la linea 6 */}
                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            {/* usamos Link de Router para hacer una navegacion ver HeroesRoutes.jsx*/}
                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
