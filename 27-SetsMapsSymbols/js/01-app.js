const carrito= new Set(); 

carrito.add('Camisa');
carrito.add('Disco #1'); 
carrito.add('Disco #2'); 
carrito.add('Disco #3'); 

console.log(carrito.delete('Disco #3')); // true or false

//console.log(carrito.has('Camisa')); // true or false 

console.log(carrito.size); 

carrito.forEach((producto, index, pertenece) => {
    //console.log(producto); 
    //console.log(index); 
    console.log(pertenece); 
})

console.log(carrito); 

//Del siguiente arreglo, elimina los duplicados
const numeros= [ 10, 20, 30, 40, 50, 10, 20 ]; 

const noDuplicados= new Set(numeros); // le pasasamos el arreglo a set 

console.log(noDuplicados);  