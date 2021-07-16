//Proobar 2 valores

function suma(a,b){
    return a+b; 
}

function restar (a, b){
    return a-b; 
}

let resultado=suma(1,2); 
let esperado=3; // lo que se espera obtener 


//similar a lo que hacen jest 
expected(esperado).toBe(resultado); 

resultado=restar(10,5); 
esperado=5; 

expected(esperado).toBe(resultado);   

expected(esperado).toEqual(resultado); 
//---------------------------------------
// en jest funciones tambien se llaman asi 
function expected( esperado ){
    return {
        toBe(resultado){
            if(resultado !== esperado){
                console.error(`El ${resultado} es diferente a lo esperado; la prueba mo paso`); // o prueba mal implementada o funcion no hace lo que debe 
            }else {
                console.log('La prueba paso correctamente '); 
            }
            

        },
        toEqual(resultado){
            if(resultado !== esperado){
                console.error(`El ${resultado} no es igual a lo esperado; la prueba mo paso`); // o prueba mal implementada o funcion no hace lo que debe 
            }else {
                console.log('La prueba paso correctamente '); 
            }
        }
    }
}