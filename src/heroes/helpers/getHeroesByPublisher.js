import { heroes } from "../data/heroes"; //importamos los heroes de la ruta indicada

export const getHeroesByPublisher = ( publisher ) => {

    //creamos una funcion para filtar el publisher seleccioado
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    //si recibimos un publisher que no este en el array validPublishers mandamos un error
    if ( !validPublishers.includes ( publisher) ){
        throw new Error(`${ publisher }  is not valid publisher `)
    }

    //si existe devolvemos los heroes que pertenecen al publisher recibido por parametro mediante el filter
    return heroes.filter( heroe => heroe.publisher === publisher);
};