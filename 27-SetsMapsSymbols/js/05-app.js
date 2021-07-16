const sym= Symbol(1);
const sym2= Symbol(1); 

//console.log(Symbol()===Symbol()); //false 
const nombre= Symbol(); 
const apellido=Symbol(); 

const persona={}

//Agregar nombre y apellido como llaves del objeto 
persona[nombre]='Juan';
persona[apellido]='De la torre';
persona.tipoCliente='premium';
persona.saldo=500

console.log(persona);
//console.log(persona[nombre]); 

//las propiedades que utilizan symbol no son iterables 
for(let i in persona){
    console.log(i); 
}

//definir una descripcion del symbol 
const nombreCliente= Symbol('Nombre del cliente')
const cliente={}; 

cliente[nombreCliente]='Pedro'; 

console.log(cliente); // aceder a todo el cliente
console.log(cliente[nombreCliente]); //acceder al contenido 
console.log(nombreCliente); //Acceder a la descripcion 
