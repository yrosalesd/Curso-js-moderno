// New binding

function Auto(modelo, color){
    this.modelo=modelo; // este es el new binding, cada vez que creas un nuevo objeto, tienes acceso a este binding
    this.color=color; 
}

const auto=new Auto('Camaro', 'Negro'); 
console.log(auto); 

// otro tipo de binding
//window binding
window.color='negro'; //asignar una variable a la ventana global

function hola(){
    console.log(color); 
}

hola(); 