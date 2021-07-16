const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'tablet', precio:200},
    {nombre:'audifonos', precio:300},
    {nombre:'teclado', precio:400},
    {nombre:'celular', precio:700},
]



const nuevoArreglo=carrito.map(( producto ) => `${producto.nombre}- precio:${producto.precio}`);


console.log(nuevoArreglo);

carrito.forEach ((producto) => console.log(`${producto.nombre}--precio: ${producto.precio}`));



