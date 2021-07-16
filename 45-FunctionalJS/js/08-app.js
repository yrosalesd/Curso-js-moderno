//scoope, la funcion no sabe que la variable de afuer existe 
// const cliente='Juan'; 

// function mostrarCliente(){
//     const cliente='Pablo'; 

//     console.log(cliente); 
// }

// mostrarCliente(); 

///////////////
//closure 
const obtenerCLiente=() => {
    const nombre="Juan"; 

    function muestraNombre(){
        console.log(nombre); 
    }

    return muestraNombre; 
}

const cliente=obtenerCLiente(); 

cliente(); 