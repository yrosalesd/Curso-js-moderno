const carrito=[];

//definir un producto
const producto={
    nombre:'monitor 32 pulgadas',
    precio:400
}

const producto2={
    nombre:'celular',
    precio:800
}

//.push agrega al final de un arreglo

const producto3={
    nombre:'teclado',
    precio:50
}

const producto4={
    nombre:'celular2',
    precio:100
}

carrito.unshift(producto3);
carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

console.table(carrito);

/*console.table(carrito); 

//Eliminar el ultimo elemento de un arreglo 
carrito.pop();
console.table(carrito);

//eliminar el primer elemento de un arreglo
carrito.shift();
console.table(carrito);*/

 carrito.splice(1,2);
 console.table(carrito);










