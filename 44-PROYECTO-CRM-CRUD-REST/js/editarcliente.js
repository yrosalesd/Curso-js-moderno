import {obtenerCliente, editarCliente} from './API.js'; 
import{mostrarAlerta, validar} from './funciones.js';

(function(){

    //campos del formulario
    const nombreInput=document.querySelector('#nombre'); 
    const emailInput=document.querySelector('#email'); 
    const empresaInput=document.querySelector('#empresa'); 
    const telefonoInput=document.querySelector('#telefono'); 
    const idInput=document.querySelector('#id'); // este no esta en el formulario pero esta oculta en el html y tambien lo tenemos que inyectar 



    document.addEventListener('DOMContentLoaded', async () =>{
        const parametrosURL=new URLSearchParams(window.location.search); 

        const idCliente= parseInt(parametrosURL.get('id')); //Identificar que registro estamos visitando para hacer la consulta a la API y traernos los resultados 

        const cliente= await obtenerCliente(idCliente); 

        mostrarCliente(cliente); 

        //Submit al formulario
        const formulario=document.querySelector('#formulario'); 
        formulario.addEventListener('submit', validarCliente); 
    }); 

    //llenar las partes del formulario 
    function mostrarCliente(cliente){
       const {nombre, empresa, email, telefono, id}=cliente; 

       nombreInput.value=nombre; 
       empresaInput.value=empresa; 
       emailInput.value=email; 
       telefonoInput.value=nombre; 
       idInput.value=id; 
    }

    function validarCliente(e){
        e.preventDefault(); 

        const cliente={
            nombre: nombreInput.value,
            email:emailInput.value,
            telefono:telefonoInput.value,
            empresa:empresaInput.value,
            id: parseInt(idInput.value)
        }

        

        if(validar(cliente)){
            //mostrar mensaje
            mostrarAlerta('Todos los campos son obligatorios'); 
            return; 
        }

        //reescribe el objeto
        editarCliente(cliente); 
    }

})(); 