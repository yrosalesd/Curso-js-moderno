
function Cliente(nombre,saldo){
    this.nombre= nombre;
    this.saldo=saldo; 
}

Cliente.prototype.tipoCliente=function(){
    let tipo; 

    if(this.saldo>10000){
        tipo='gold'
    } else if (this.saldo>5000){
        tipo='platinum'
    }else{
        tipo='Normal'
    }
    return tipo; 
}

Cliente.prototype.nombreCLienteSaldo=function (){
    return `Nombre: ${this.nombre}, saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo=function(retira){
    this.saldo -= retira
}

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo); 
    this.telefono=telefono; 
}

//heredar proto de cliente hacia persona
Persona.prototype=Object.create(Cliente.prototype); 
//reasignando constructor de cliente a persona
Persona.prototype.constructor=Cliente; 

//Instanciarlo
const juan= new Persona('Juan', 5000, 10920192); 
console.log(juan); 
console.log(juan.nombreCLienteSaldo()); 

Persona.prototype.mostrarTelefono=function(){
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(juan.mostrarTelefono())