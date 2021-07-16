const cliente={
    nombre: 'Juan 2', //si cambio estp, marca error porque detecta que es diferente al snapshot que hay almacenado, son diferentes, no pasa la prueba 
    balance: 500,
    tipo: 'Premium'
}; 

//como probar el objeto completo  
describe('Testing al cliente', () => {
    test('Es Juan pablo', () => {
        expect(cliente).toMatchSnapshot(); 
    });  // si ejecutamos prueba crea una nueva carpeta llamada snapshots y si la abrimos tiene un string con la forma de un objeto, estos archivos solo jest debe de modificarlos 
})
