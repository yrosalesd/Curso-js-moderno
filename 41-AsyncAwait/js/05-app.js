const url ='https://picsum3.photos/list'; 

document.addEventListener('DOMContentLoaded', obtenerDatos); 

// con promises
/*function obtenerDatos(){
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error)); 
}*/

//con async await( es mas corto) el de arriba si E un erro si me dice donde y este no porque este aun no tiene el catch
/*async function obtenerDatos(){
    const respuesta= await fetch(url); // esta linea bloquea la siguiente porque en base a esa respuesta es lo que va a ejecutar la siguiente linea
    const resultado= await respuesta.json(); 
    console.log(resultado); 
}*/

//agregando try catch 
async function obtenerDatos(){
    try{
        const respuesta= await fetch(url); // esta linea bloquea la siguiente porque en base a esa respuesta es lo que va a ejecutar la siguiente linea
        const resultado= await respuesta.json(); 
        console.log(resultado);

    }catch(error){

        console.log(error); 
    }
}// ahora si este y el fetch son equivalentes y el de fetch es menos codigo, pero esta es una sintaxis mas clara de leer
   