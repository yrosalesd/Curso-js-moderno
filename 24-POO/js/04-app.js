/* class Cliente{

    #nombre; 

    constructor(nombre,saldo){
        this.#nombre=nombre;
        this.saldo=saldo;
    }
    //creando metodo 
    mostrarInformacion (){

        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`; 
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }
}

const juan=new Cliente('juan', 200);
console.log(juan.mostrarInformacion());
//console.log(juan.#nombre); */

class Cliente{

    #nombre; 

    setNombre(nombre,saldo){
        this.#nombre=nombre;
        
    }
    
    getNombre(){

        return this.#nombre; 
    }

    
}

const juan=new Cliente();
juan.setNombre('Juan'); 
console.log(juan.getNombre()); 