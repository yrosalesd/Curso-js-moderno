//Proobar 2 valores

function suma(a,b){
    return a+b; 
}

function restar (a, b){
    return a-b; 
}

//creando promise para poder utilizar try catch
async function sumaAsync (a, b){
    return Promise.resolve(suma(a,b)); 
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

test ('Suma 10 + 20 y  el resultaso debe ser 30', async()=>{
    const resultado=await sumaAsync(10,20); 
    const esperado=30; 
    expected(esperado).toBe(resultado)
})


async function test(mensaje, callback){
    try{
        await callback(); 
        console.log(`El Test: ${mensaje} se ejecuto correctamente`); 

    }catch(error){
        console.error('Error:'); 
        console.error(error); 
    }
}


function expected( esperado ){
    return {
        toBe(resultado){
            if(resultado !== esperado){
                console.error(`El ${resultado} es diferente a lo esperado; la prueba no paso`); // o prueba mal implementada o funcion no hace lo que debe 
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