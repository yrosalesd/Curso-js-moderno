class Cliente{
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
    //creando metodo 
    mostrarInformacion (){

        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`; 
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

//Herencia 

class Empresa extends Cliente {
    constructor (nombre, saldo, telefono, categoria){
        super(nombre, saldo); 
        this.telefono=telefono;
        this.categoria=categoria; 
    }
    
    static bienvenida(){ //reescribir un metodo 
        return `Bienvenido al cajero de empresas`
    }
}

const juan= new Cliente('Juan', 400); 
const empresa=new Empresa('codigo con juan', 500, 12345678, 'aprendizaje en linea');
console.log(empresa);
console.log(empresa.mostrarInformacion()); 

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
