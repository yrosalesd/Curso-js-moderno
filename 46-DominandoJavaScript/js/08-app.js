// similar al DOMContentLoaded
self.onload=() => {
    console.log('Ventana Lista'); 
}

///otra forma de usar self

// const producto={
//     nombre:'Monitor 20 pulgadas', 
//     precio:30,
//     disponible: true,
//     mostrarInfo: function(){
//         const self=this; 
//         return `El producto: ${self.nombre} tiene un precio de ${self.precio}`
//     }
// }

// console.log(producto.mostrarInfo()); 

///////////////////////////otra forma de usar self 
 window.nombre='Monitor 20 pulgadas'; 

 const producto={

    precio:30,
    disponible:true,
    mostrarInfo:function(){
        return `El producto: ${self.nombre}`// se refiere a la ventana global 
    }
 }

 console.log(producto.mostrarInfo()); 