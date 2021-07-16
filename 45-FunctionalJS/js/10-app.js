//funcion para obtener un nombre que voy a utilizar en mi objeto de Cliente y en mi objeto de Empleado
const obtenerNombre= info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`); 
    }

})

//definir una funcion a la cual yo le pasaria un valor 
const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardando email en: ${info.nombre}`); 
        info.email=email; 
    }
})

const obtenerEmail=info=>({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`); 
    }
})

const obtenerEmpresa= info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`); 
    }
})

const obtenerPuesto= info => ({
    mostrarPuesto(){
        console.log(`Empresa: ${info.puesto}`); //algunas funciones se comparten entre bjetos, otras no 
    }
})


///////////////////////////////////////////////////////////////77
function Cliente(nombre, email, empresa){
    let info={
        nombre,
        email,
        empresa
    }

    //toma una funcion y la copia dentro de este objeto 
    return Object.assign(
        info, 
        obtenerNombre(info),//info: datos de la memoria de este objeto
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

function Empleado(nombre, email, puesto){
    let info={
        nombre, 
        email,
        puesto
    }
    //toma una funcion y la copia dentro de este objeto 
    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente= Cliente('Juan', 'correo@correo.com', 'Codigo con Juan');
//para obtener el nombre:
cliente.mostrarNombre(); //se llama la funcion que esta dentro de la funcion
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail();  
cliente.mostrarEmpresa(); 

console.log('========================'); 

const empleado=Empleado('Pedro', 'empleado@empleado.com', 'Programador'); 
empleado.mostrarNombre(); 
empleado.agregarEmail('empleado@empleado.com'); 
empleado.mostrarEmail(); 
empleado.mostrarPuesto();    