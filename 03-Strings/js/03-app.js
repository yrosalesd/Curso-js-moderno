const producto=' Monitor 20 pulgadas ';
const precio=' 30 USD';
//sale contenido de producto y precio
console.log(producto.concat(precio));
//sale contenido de producto y lo que escribiste
console.log(producto.concat('En descuento')); 

console.log (producto + precio); 
console.log (producto +"Con un precio de: "+ precio);

console.log("EL producto"+ producto + "tiene un precio de"+ precio );
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);

console.log("EL producto", producto , "tiene un precio de", precio );