// coercion implicita:  se esta forzando a que javaScript lo haga y lo modifique
const numero1=20; 
const numero2="40"; 

console.log(numero1+numero2); // javaScript lo modifica de forma implicita imprime 2040 lo convierte a string

// coercion explicita, esta usualmente requiere utilizar una funcion 
console.log(Number(numero2)); 

console.log(numero1.toString()); 

const pedido=[1,2,3,4]; 
console.log(pedido.toString()); 

console.log(JSON.stringify(pedido)); // de arreglo a string
