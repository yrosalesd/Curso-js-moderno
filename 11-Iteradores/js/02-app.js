//continue 

/*for(let i=0 ; i<10 ; i++){
    if(i===5){
    console.log('CINCO');
    continue; // no rompe el for loop solo se regresa al inicio del foor loop 
    }
    console.log(`Numero: ${i}`)
}*/

//break 

/*for(let i=0 ; i<10 ; i++){
    if(i===5){
    console.log('CINCO');
    break; // rompe el for loop 
    }
    console.log(`Numero: ${i}`)
} */

const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'tablet', precio:200, descuento:true},
    {nombre:'audifonos', precio:300},
    {nombre:'teclado', precio:400},
    {nombre:'celular', precio:700},
]

for(let i=0; i< carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue; 
    } 
    console.log(carrito[i].nombre);  
}


  










