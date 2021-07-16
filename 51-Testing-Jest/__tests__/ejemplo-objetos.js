const cliente={
    nombre:'Juan Pablo',
    balance: 500
}; 

// si el cliente tiene mas de 400 entonces pertenece a la categoria de premium 
describe('Testing al cliente', () =>{
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);  
    }); 

    test('Es Juan Pablo', () => {
        expect(cliente.nombre).toBe('Juan Pablo'); 
        //                       ---- que sea igual a juan pablo 
    }); 

    //para comprobar que no sea un valor para evitar falsos positivos 
    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro'); 
    }); 

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400); 
    }); 

    
} )