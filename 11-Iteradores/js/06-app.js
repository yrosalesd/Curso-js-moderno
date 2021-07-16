//forEach
const pendientes=['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice)=> {
    console.log(`${indice} : ${pendiente}`)
}) 

const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'tablet', precio:200},
    {nombre:'audifonos', precio:300},
    {nombre:'teclado', precio:400},
    {nombre:'celular', precio:700},
]

carrito.forEach(producto=>console.log(producto.nombre));

const nuevoArreglo2 = carrito.map(producto=>console.log(producto.nombre));


console.log(nuevoArreglo2);



