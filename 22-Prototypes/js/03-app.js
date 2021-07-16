
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
//instanciarlo
const pedro= new Cliente('pedro', 6000); 
console.log(pedro.tipoCliente());
console.log(pedro.nombreCLienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreCLienteSaldo());

console.log (pedro); 

