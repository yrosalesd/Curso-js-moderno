const suma=(a,b,c)=> a+b+c; 

////////////////////
// const parcial=(a) => (b,c) => suma(a,b,c);  // 2 parciales (dividir la funcion en 2 partes )

// const primerNumero=parcial(5); //usando primera parte 
// const resultado= primerNumero(4,3);
// console.log(resultado); 

////
//en tres partes 
// const parcial =a =>b => c => suma(a,b,c); 

// const primerNumero=parcial(5); 
// const segundoNumero=primerNumero(4); 
// const resultado=segundoNumero(3); 

// console.log(resultado); 
////////////////////////////
const parcial =a =>b => c => suma(a,b,c); 

const resultadoParcial=parcial(5)(4)(3);// ¿que hace? aplica currying y partials dividiendo funcion en pequeñas partes

console.log(resultadoParcial); 