// declarando promise 
const aplicarDescuento = new Promise ((resolve, reject ) =>{
                //-------------------------nombre promise 
                                        //----------------lo que se va a ejecutar cuando el promise se ejecuta correctamente o cuando se cumple el promise 
                                                //---------------cuando tenemos un error en el promise
    const descuento = true ; 
    
    if (descuento){
        resolve('Descuento Aplicado')
    }else {
        reject('No se pudo aplicar el descuento')
    }
})
        
//console.log(aplicarDescuento);

//Hay 3 valores posibles...
//fulfilled- el promise se cumplio
//rejected- El promise no se cumplio
//pending- no se ha cumplido y tampoco fue rechazado (no he definido solver ni reject )

aplicarDescuento
    .then( resultado => descuento(resultado))
    .catch( error => console.log(error))

    function descuento(mensaje){
        console.log(mensaje); 
    }