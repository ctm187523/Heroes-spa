import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    //usamos el Hook de React useMemo para cuando el publisher cambie dispare la funcion 
    //si no cambia se mantiene igual no se redibuja lo memorizamos y evitamos que se vuelva a cargar sin el tambien
    //funcionaria todo bien pero lo hacemos por si algo recarga la pagina
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ]);

    return (
        // el interior del classname es una clase de bootstrap el g-3 es una separacion en vertical entre los elementos
        //con md-3 decimos que ocupa 3 columnas
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (

                    <HeroCard
                        key={hero.id}
                        {...hero} //desestructuramos el hero conel spread(...) con todas sus propiedades para pasarselas como props al componente HeroCard.jsx
                    />
                ))
            }

        </div>
    )
}
