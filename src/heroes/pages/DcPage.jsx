import { HeroList } from "../components"

export const DcPage = () => {
    return (
        <>

            <h1>DC Comics</h1>
            <hr />

            {/* llamamos al componente HeroList para que nos de la listas de superheroes pasados por props al componente */}
            <HeroList publisher={"DC Comics"} />

        </>
    )
}
