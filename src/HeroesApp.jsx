import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
    return (
        <>
            {/*importamos el componente AppRouter.jsx creado por nosotros para poder usar las rutas genereadas en el componente */}
            <AppRouter />
        </>
    )
}
