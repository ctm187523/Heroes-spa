import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

    //usamos el Hook de React useNavigate
    const navigate = useNavigate();

    //usamos el Hook de React useLocation para tomar el query parameter que introducimos en el metodo onSearchSubmit 
    const location = useLocation();

    //hemos instalado en la terminal query-string y importado arriba linea 2 para poder extraer del location de arriba
    //la propiedad search y poder trabajar mas facilmente, separa lo contenido en el query
    //desestructuramos para obtener unicamente la q(el query) y si no viene que lo mande vacio
    const { q = '' } = queryString.parse(location.search);

    //usamos la funcion creada por nosotros en el archivo getHeroesByName par buscar un heroe por el nombre
    //introducido por el usuario, le pasamos por parametro el query obtenido que contine el nombre del heroe a buscar
    const heroes = getHeroesByName(q);


    //usamo el useForms de la carpeta Hooks global al proyecto, este Hook ya lo habiamos creado
    //en proyectos anteriores y esta subido al Hook en GitHub desestructuramos y usamos searchText
    //para obtener el valor del form introducido por el usaurio y la funcion del useForm onInputChange
    const { searchText, onInputChange } = useForm({

        //usamos el searchText que es la informacion que pondra el usaurio en el formulario
        //hemos usado el atributo name="searchText" y value={ searchText }en el form de abajo para poder poder referenciarlo
        //por defecto decimos que muestre el query hayado en la linea 18 que es el query que mantiene el navegador al refrescar la pantalla como el query no cambia se mantiene en el buscador el personaje seleccionado
        searchText: q

    });

    // variables para evaluar lo recibido para luego mostrar o no los mensajes en la interfaz lo usamos mas abajo linea 95
    const showSearch = (q.length === 0); //decimos que si la longitud del query es cero la variable showSearch sera true
    const showError = (q.length > 0) && heroes.length === 0; //decimos que si la longitud del query es mayor que cero y la longitud de los heroes recibidos es cero showError es true

    //funcion llamada desde el form para poder manejar lo introducido en el form por el usuario(postear el formulario) guardado en la variable searchText
    const onSearchSubmit = (event) => {
        event.preventDefault();

        // if (searchText.trim().length <= 1) return; // si no se escriba nada o solo una letra no hacemos nada
        //console.log( searchText );

        //mandamos un query parameter al navegador con lo introducido por el usuario
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                    </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {/* usamos un ternario para decir que si el query esta vacio muestre Search a hero
                    si no esta vacio y heroes.lenght es cero o sea que no se a encontrado muestre la alerta de que no se ha encontrado 
                    LO COMENTAMOS LO DE ABAJO PARA HACER LA MISMA FUNCION PERO USANDO UN COMPONENTE DIV QUE SE ENCARGUE DE ELLO*/}
                    {/*
                    {
                        (q === '' )
                            ? <div className="alert alert-primary"> Search a hero  </div>
                            : (heroes.length === 0)
                            && <div className="alert alert-danger">    No hero with <b> {q} </b>  </div>
                    }
                    */}

                    {/* ponemos el display en none para que se oculte el div y ademas no ocupe espacio en caso de cumplirse la condicion terciaria
                    si esta showSearch en true se muestra en caso contrario no se muestra añadimos tambien en el
                    classname una animacion como la usada en HeroPage.jsx*/}
                    <div className="alert alert-primary img-thumbnail animate__animated animate__fadeIn"
                        style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                     </div>

                    {/* ponemos el display en none para que se oculte el div y ademas no ocupe espacio en caso de cumplirse la condicion terciaria
                    si esta showErrror en true se muestra en caso contrario no se muestra añadimos tambien en el
                    classname una animacion como la usada en HeroPage.jsx*/}
                    <div className="alert alert-danger img-thumbnail animate__animated animate__fadeIn"
                        style={{ display: showError ? '' : 'none' }}>
                        No hero with <b> {q} </b>
                    </div>




                    {/* Mostramos el heroe selecicionado por el usuario obtenemos el heroe en la linea 22 
                    usamos el componente HeroCard para mostrar el heroe pasando el id y desestructurando la infromacion
                    si por ejemplo ponemos green en el buscador aparecen Green Lantern y Green Arrow
                    aparecen todos los elementos que contengan similutudes con la busqueda*/}
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }



                </div>
            </div>

        </>
    )
}
