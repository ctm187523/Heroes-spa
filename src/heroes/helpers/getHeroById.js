import { heroes } from "../data/heroes"


export const getHeroById = ( id ) => {

    //si existe devuelve el hero pasado por id del archivo heroes.js si no existe devuelde undefined
    return heroes.find( hero => hero.id === id );

}