import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>

            <Routes>

                {/* ruta para dirigirnos al componente LoginPage lo envolvemos
                en el componente PublicRoute para que no pueda acceder al login 
                un usuario que esta autenticado ver PublicRoute.jsx de la carpeta router*/}

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />


                {/* Para dirigirnos al componente HeroesRoutes hacemos que sea privada(si el usuario no esta loggeado no puede entrar) envolviendola
                en el componente privateRoute ver componente PrivateRoute.jsx de la carpeta router,  le decimos con /* que cualquier ruta que no sea el login vaya al componente HeroesRoutes*/}
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>

                } />

            </Routes>
        </>
    )
}
