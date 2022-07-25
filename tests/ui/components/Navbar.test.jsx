import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate} from "react-router-dom";
import { Navbar } from "../../../src/ui/components/Navbar";
import { AuthContext } from "../../../src/auth/context/AuthContext";


//para el segundo test creamos un Mock del Hook de React useNavigate 
//para llamar a la variable navigate creada en Navbar.jsx

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'), //le decimos que desestructure la libreria react-router-dom pero solo usamos el useNavigate
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en Navbar', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Pepe'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getByText('Pepe')).toBeTruthy();

        
    });


    test('debe de llamar el logout y navigate cuando se hace click en el boton ', () => {
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click ( logoutBtn );

        expect (contextValue.logout).toHaveBeenCalled();
        expect (mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true});  //usamos la variable creada en la linea 10 mockedUseNavigate
    });
    
    
    
})
