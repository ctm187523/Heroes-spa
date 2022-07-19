import { HeroList } from "../components"


export const MarvelPage = () => {
    return (
        <>
            <h1>Marvel Comics</h1>
            <hr />

            <ul>
                {/* llamamos al componente HeroList para que nos de la listas de superheroes pasados por props al componente */}
                <HeroList publisher={"Marvel Comics"} />
            </ul>
        </>
    )
}
