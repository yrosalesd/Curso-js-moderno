const producto={
    idProducto:10
}

const weakmap= new WeakMap(); //crear weak map 

weakmap.set(producto, "Monitor"); //agregando objeto y string a weakmap

console.log(weakmap.has(producto)); 
console.log(weakmap.get(producto)); // ocutla lo que hay en el objeto y solo imprime string "monitor" 
//console.log(weakmap.delete(producto)); 

console.log(weakmap); 