const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes,i) => {
    if( mes==='Abril'){
        console.log(`Encontrado en el indice ${i}`)
    }
})

//Encontrar el indice de abril 
const indice = meses.findIndex( mes => mes=== 'Diciembre');
console.log(indice); 

// encontrar en arreglo de objetos

const indice1 = carrito. findIndex( producto => producto.precio === 100);
console.log(indice1); 











