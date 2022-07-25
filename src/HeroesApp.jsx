import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
    return (
        //proveemos del AuthProvider(auth/context) el contexto pasandolo los values necesarios para los componentes contenidos en AuthProvider, compartimos la informacion en los componentes contenidos
        //le pasamos a los componeentes contenidos en el AuthProvider el estado del loggin para si esta en false sacarlo de la aplicacion
        <AuthProvider>
            {/*importamos el componente AppRouter.jsx creado por nosotros para poder usar las rutas genereadas en el componente */}
            <AppRouter />

        </AuthProvider>
    )
}
