// 2 promises 
function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes...'); 

        setTimeout(() =>{
            resolve('Los clientes fueron descargados '); 
        }, 5000); 
    })
}

function descargarNuevosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos...'); 

        setTimeout(() =>{
            resolve('Los pedidos fueron descargados'); 
        }, 3000); 
    })
}

// si funciona pero no de la forma correcta porque esta descargando clientes, y mientras esta bloqueando la descarga de nuevos pedidos eso esta bien cuando quiere tener listos unos resultados para hacer la consulta en otros, pero en este caso son consultas independientes

/*const app= async () => {
    try{
        const clientes = await descargarNuevosClientes(); 
        console.log(clientes); 

        const pedidos= await descargarNuevosPedidos(); 
        console.log(pedidos); 
    } catch( error){
        console.log(error); 
    }
}

app(); */

// para promises independientes para mejorar el perfomance  
const app= async () => {
    try{
        const respuesta= await Promise.all([ descargarNuevosClientes(), descargarNuevosPedidos()]); // toma un arreglo de diferentes promises que quieres ejecutar al mismo tiempo porque no tienen nada que ver una con otra
        //console.log(respuesta)// salen las respuestas de ambos promises
        console.log(respuesta[0]); 
        console.log(respuesta[1]); // obtener respuestas de promises por separado 
    }catch(error){
        console.log(error)
    }
}

app(); 