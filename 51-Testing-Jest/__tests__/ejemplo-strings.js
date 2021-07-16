// una variable tenga un string asociado

//metodos para strings
const password="123456"; 

describe('Valida que el password no este vacio y tenga una estension de 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () =>{
        expect(password).toHaveLength(6); 
        //          ------------lo que vamos a validar 
        //                   ----------cuantos caracteres quieres comprobar que tenga 
    }); 

    test('Password no vacio', () => {
        expect(password).not.toHaveLength(0); 
    })


}) //agrupar diferentes pruebas en un mismo archivo 