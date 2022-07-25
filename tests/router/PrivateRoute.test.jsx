import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";

import { PrivateRoute } from "../../src/router/PrivateRoute";


describe('Pruebas en el PrivateRoute', () => {

    test('debe de mostrar el children si esta autenticado', () => {

        //comprobamos el localstorage si es llamado
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Manolo'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        
        //comprobamos que el localstorage haya sido llamado
        expect( localStorage.setItem).toHaveBeenCalled();
        expect( localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
        screen.debug()

    });

})
