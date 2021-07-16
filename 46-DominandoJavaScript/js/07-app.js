
console.log('Primero'); 

setTimeout(() => {
    console.log('Segundo'); 
}, 0); 

console.log('Tercero'); 

setTimeout(() =>{
    console.log('Cuarto'); 
},0); // el setimeout no empieza en cero, es algo asi como 30 

new Promise(function(resolve){
    resolve('Desconocido...')
}).then(console.log)


console.log('ultimo')

function hola(){
    console.log('hola')
}
hola(); 