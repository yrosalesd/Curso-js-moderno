const paises=['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback){
                            //-----------funcion que se va a ejecutar cuando nuevoPais sea mandado llamar 
    setTimeout(() => {
        paises.push(pais); 
        callback(); 
    }, 2000); 
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais); 
        }); 
    }, 1000); 
}

mostrarPaises(); 

nuevoPais('Alemania', mostrarPaises); 