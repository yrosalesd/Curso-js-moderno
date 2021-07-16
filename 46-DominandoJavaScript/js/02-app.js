obteneCliente('Juan'); 
function obteneCliente(nombre){
    console.log(`EL nombre del cliente es ${nombre}`); // aqui primero registra la function y despues la manda llamar
}

//////////////////////////////////////////////////

// obteneCliente2('Pablo'); 
// const obteneCliente2; = function(nombre){
//     console.log(`EL nombre del cliente es ${nombre}`)
// }


// es como si tuvieramos esto 

obteneCliente2('Pablo'); 
const obteneCliente2; // por eso marca error, porque esto esta como undefined

obtenerCliente2= function(nombre){
    console.log(`EL nombre del cliente es ${nombre}`)
}