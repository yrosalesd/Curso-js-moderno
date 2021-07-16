const producto='                   Monitor 20 pulgadas         ';

console.log(producto);
console.log(producto.length);

// Eliminar espacios de inicio
console.log(producto.trimStart());
// eliminar espacio al final 
console.log(producto.trimEnd());

//eliminar ambos lados(nuevo )
console.log(producto.trimStart().trimEnd());

//eliminar ambos lados forma 2 (viejito)
console.log(producto.trim());
