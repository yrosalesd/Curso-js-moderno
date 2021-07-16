let DB; 

document.addEventListener('DOMContentLoaded', () => {
    crmDB(); 

    setTimeout(()=> {
        crearCliente(); 

    }, 5000); 
})

function crmDB(){

    //crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1); 

    // si hay un error
    crmDB.onerror=function(){
        console.log('Hubo un error a la hora de crear la BD'); 
    }

    // si se creo bien
    crmDB.onsuccess= function(){
        console.log('Base de datos Creada!'); 

        DB=crmDB.result; //resultado de la creacion de la BD
    }

    //configuracion de la base de datos
    crmDB.onupgradeneeded=function(e){
        const db= e.target.result;// resultado de la creacion lo mismo que anterior 
                                                    //-----base de datos 
        const objectStore = db.createObjectStore( 'crm', {
            keyPath: 'crm',
            autoIncrement: true  // objetos de configuracion // va incrementando el id  
        }); 

        //Definir las columnas
        objectStore.createIndex('nombre', 'nombre', {unique:false} ); 
                                            //------como vamos a hacer referencia para consultar la tabla del nombre keyPath
                                                        //-------------opciones unique:false porue podemos tener 2 clientes que se llamen igual, y no es la misma persona , se pone true si si es unico como un email 
        objectStore.createIndex('email', 'email', {unique:true} ); 
        objectStore.createIndex('telefono', 'telefono', {unique:false} ); 

        console.log('Columnas creadas');   
    
    
    
    
    }
}    

function crearCliente(){ 

    let transaction =DB.transaction(['crm'], 'readwrite'); 
                                      //-------BD
                                               //  ------Modo tambien E readonly 
    transaction.oncomplete=function(){
        console.log('transaccion completada');  // si se completa 
    }

    transaction.onerror=function(){
    console.log('hubo un error en la transaccion'); 
    }

    //escrbir un objeto en nuestra BD 
    const objectStore= transaction.objectStore('crm'); 

    //creando objeto
    const nuevoCliente={

        telefono: 123455566,
        nombre: 'Julieta',
        email: 'correo@correo.com'

    }

    //Agregar nuevo cliente
    const peticion = objectStore.add(nuevoCliente)
    console.log(peticion); 

} 