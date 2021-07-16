//funciones puras o pure functions
const duplicar= numero => numero*2 ; // toma un numero y retorna un numero 

// no modifican un valor original
const numero1=20; 
const resultado=duplicar(numero1); //generamos un nuevo valor  

console.log(resultado); 
console.log(numero1); 