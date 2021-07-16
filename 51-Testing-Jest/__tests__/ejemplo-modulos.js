import {suma} from '../js/funciones.js'; 

describe('Suma de 2 numeros', () => {
    test('Sumar 10 y 20, debe dar como resultado 30',() => {
        expect(suma(10,20)).toBe(30)
    })
}); 

//test suites es que falla el archivo 
//jest no puede leer este import porque no tiene mucho soporte
//lo que si soporta son modulos de commond js, en lugar de export utilizas module.exports pero no funcionan en el navegador 
// en lugar de import from, utilizas una variable 
//const suma= require()
//                    ----de que dependencia estas tratando de importar  