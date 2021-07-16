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

const producto3={
    nombre:'teclado',
    precio:50
}

//
let resultado;

resultado=[...carrito,producto];
resultado=[...resultado,producto2];
resultado=[producto3,...resultado];


console.table(resultado);



console.table(carrito); 






















