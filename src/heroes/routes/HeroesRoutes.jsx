import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage} from "../pages"

export const HeroesRoutes = () => {
    return (
        <>

            {/* usamos el componente NavBar creado en la carpeta ui(interfaces graficas) y dentro de ui en la carpeta components. Comun a todas las paginas de la aplicacion excepto el login
            ya que hemos creado dos Routers*/}
            <Navbar />
            <div className="container">

                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchPage/>} />
                    {/* usamos con /: un comodin que le llamaremos id llamamos a esta
                     ruta desde la linea 57 del componente HeroCard.jsx y le pasamos al componente HeroPage
                     como param el id que contiene la informacion del HeroCard.jsx∫*/}
                    <Route path="hero/:id" element={<HeroPage/>} />


                    {/* si el path no coincide con ninguna nos lleva al redirect de /marvel */}
                    <Route path="/*" element={<Navigate to="/marvel" />} />
                </Routes>

            </div>


        </>
    )
}
