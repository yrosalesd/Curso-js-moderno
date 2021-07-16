/*const meses=['Enero','febrero','marzo'];

//Agregar al final del arreglo

meses.push('Abril');
meses.push('Mayo');

console.table(meses); */

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
carrito.push(producto2);
carrito.push(producto);

const producto3={
    nombre:'teclado',
    precio:50
}

carrito.unshift(producto3);

console.table(carrito); 































