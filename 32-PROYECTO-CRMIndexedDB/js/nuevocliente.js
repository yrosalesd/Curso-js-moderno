(function(){
    //let DB;  // no se mezclan es propio de este archivo por el iife
    const formulario=document.querySelector('#formulario'); 

    document.addEventListener('DOMContentLoaded', () => {

        conectarDB(); 

        formulario.addEventListener('submit', validarCliente); 
    }); 

 
    function validarCliente(e){
        e.preventDefault(); 

        //leer todos los inputs
        const nombre= document.querySelector('#nombre').value; 
        const email=document.querySelector('#email').value; 
        const telefono=document.querySelector('#telefono').value; 
        const empresa=document.querySelector('#empresa').value; 

        if(nombre==='' || email==='' ||telefono==='' ||empresa===''){
            imprimirAlerta('Todos los campos son obligatorios', 'error'); 
            return; 
        }

        //Crear un objeto con la informacion

        const cliente={
            nombre,
            email,
            telefono,
            empresa, //ya toman los valores porque se igualan a leer imputs de arriba, como se llaman igual ya no se pone llave valor 
            //id: Date.now()// asi Ó
        }

        console.log(cliente); 
        cliente.id=Date.now(); 
        crearNuevoCliente(cliente); 
    }

    function crearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite'); 

        const objectStore=transaction.objectStore('crm'); 

        objectStore.add(cliente);  

        transaction.onerror=function(){
            console.log('hubo un error')
            imprimirAlerta('Hubo un error', 'error'); 
        }; 

        transaction.oncomplete=function(){
            
            imprimirAlerta('El cliente se agrego correctamente');   

            setTimeout(() =>{
                window.location.href='index.html'; // despues de 3 seg se va a index html 

            }, 3000); 
        }
    }

    



})(); //IIFE