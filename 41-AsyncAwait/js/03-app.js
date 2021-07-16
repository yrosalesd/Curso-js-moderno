function descargarClientes(){

    return new Promise((resolve, reject) =>{
        const error=false; 

        setTimeout(() => {
            if(!error){
                resolve('El listado de Clientes se descargo correctamente'); 
            }else{
                reject('Error en la conexion'); 
            }
        }, 3000); 
    })
}

//Async await

const ejecutar = async () =>{
    try{
        console.log(1+1); 
        const respuesta= await descargarClientes(); // si hay error en promise (reject) se va al catch 

        console.log(2+2); 
        console.log(respuesta); 

    }catch(error){
        console.log(error); 
    }
}
ejecutar(); 