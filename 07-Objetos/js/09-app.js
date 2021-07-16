const producto={
    nombre:'monitor 20 pulgadas',
    precio:300,
    disponible:true,
}

Object.seal(producto); 

producto.disponible=false;

//producto.imagen='imagen.jpg';
//delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));
