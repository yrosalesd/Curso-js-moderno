import Citas from '../js/classes/Citas'; 

describe('Probar la clase de Citas', () => {

    const citas=new Citas(); //instanciando 
    const id=Date.now(); //global para que sepa que id es, y sea el mismo id para ambas pruebas  

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Laika',
            propietario: 'Julieta',
            telefono: '123456',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'solo duerme'
        }; //parametros que le paso estan aqui porque no los importamos 

        

        citas.agregarCita(citaObj); // se usa la instanciada 

        //prueba
        expect(citas).toMatchSnapshot();
        //               ---------------------------verificar que info que estamos pasando a la clase, se este guardando correctamente, escribe un snapshot con el arreglo y la info 
        
    }); 

    test('actualizar cita', () => {
        const citaActualizada={
            id,
            mascota: 'Nuevo Nombre',
            propietario:'Julieta',
            telefono:'19999393',
            fecha:'10-12-2020',
            hora:'10:30',
            sintomas:'Solo duerme'
        }; 

        citas.editarCita(citaActualizada); 

        expect(citas).toMatchSnapshot(); // es correcto porque esta actulizada basado en el id 
    }); 

    test('Eliminar Cita', () => {
         citas.eliminarCita(id); 

         expect(citas).toMatchSnapshot(); 
    })
}); 

