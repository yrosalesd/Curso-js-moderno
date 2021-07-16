const suma=(a,b) =>  a+b; 
const multiplicar = (a, b) => a*b; 

const sumarOMultiplicar= fn => fn(10,20); //funcion intermedia que toma una funcion o la otra

console.log(sumarOMultiplicar(suma)); // funcion como argumento
console.log(sumarOMultiplicar(multiplicar));