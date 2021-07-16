//Proobar 2 valores

function suma(a,b){
    return a+b; 
}

function restar (a, b){
    return a-b; 
}

let resultado=suma(2,2); 
let esperado=3; // lo que se espera obtener 

if(resultado !== esperado){
    console.error(`El ${resultado} es diferente a lo esperado; la prueba mo paso`); // o prueba mal implementada o funcion no hace lo que debe 
}else {
    console.log('La prueba paso correctamente '); 
}

resultado=restar(10,5); 
esperado=5; 

if(resultado !== esperado){
    console.error(`El ${resultado} es diferente a lo esperado; la prueba mo paso`); // o prueba mal implementada o funcion no hace lo que debe 
}else {
    console.log('La prueba paso correctamente '); 
}

