const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

//obtener productos con presio mayor a 400 
// const resultado=carrito.filter(producto => {
//     return producto.precio>400; 
// }); 

// console.log(resultado); 

//llevando lo anterior a higer oder functions
const mayor400=producto => {
    return producto.precio > 400; 
}

const resultado=carrito.filter(mayor400); //funcion que tomaria una funcion (higher order functions)(creamos nuevo arreglo, no estamos modificando el arreglo original)
console.log(carrito); 
console.log(resultado); 
