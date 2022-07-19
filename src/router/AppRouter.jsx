import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes} from '../heroes'

export const AppRouter = () => {
    return (
        <>
            
            <Routes>
                
                {/* ruta para dirigirnos al componente LoginPage */}
                <Route path="login" element={<LoginPage />} />

                {/* ruta para dirigirnos al componente HeroesRoutes donde tenemos todas las rutas de lo que seria la aplicacion 
                le decimos con /* que cualquier ruta que no sea el login vaya al componente HeroesRoutes*/}
                <Route path="/*" element={<HeroesRoutes />} />

            </Routes>
        </>
    )
}
