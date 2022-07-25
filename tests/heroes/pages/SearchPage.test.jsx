import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

//para el tercer test creamos un Mock del Hook de React useNavigate 
//para llamar a la variable navigate creada en SearchPage.jsx



const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'), //le decimos que desestructure la libreria react-router-dom pero solo usamos el useNavigate
    useNavigate: () => mockedUseNavigate
}));

describe('Purebas en <SearchPage />', () => {

    beforeEach( () => jest.clearAllMocks());

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render( //desestructuramos el container del render para poder usarlo para crear el Snapshot(fotografia)

            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot(); //creamos la fotografia(Snapshot);
        //screen.debug()
    });

    test('debe de mostrar a Batman y el input con el valor del queryString', () => {

        render(

            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        //screen.debug();
        //evaluamos que el input sea batman tal como pusimos en la linea 24 en el query
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        //evaluamos que tengamos la ruta de la imagen a cargar seleccionada
        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

        //evaluamos que al tener una consulta el display de la alerta esta en none
        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('none');
    });

    test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {

        render(

            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        //evaluamos que al tener una consulta el display de la alerta no este en none al poner batman123 y no existir debe de mostrar un mensaje de error
        const alert = screen.getByLabelText('alert-danger');
        //screen.debug();
        expect(alert.style.display).toBe(''); //debe de mostrar una cadena vacia no muestra el display:none ya que si se muestra
    });

    test('debe de llamar el navigate a la pantalla nueva', () => {

        render(

            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        //creamos el evento para el input con fireEvent.change introducimos los datos del input en value ponemos superman
        const input= screen.getByRole('textbox');
        fireEvent.change( input, {target: {name: 'searchText', value: 'superman' }});

        //creamos el evento del form submit
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        //llamamos el navigate con el valor de superman para que lo muestre en otra pagina usando el mock a partir de la linea 10
        expect ( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman');
    })



});
