//constructor pattern 

class Persona{
    constructor(nombre, email){
        this.nombre=nombre; 
        this.email=email; 
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email); //hace referencia a los atributos de la clase padre
        this.empresa=empresa; // nueva propiedad (utilizamos buena parte del contructor padre y agregamos nuevos atributos al constructor hijo)
    }
}

//tambien puedes instanciar persona: 
const persona=new Persona('Juan', 'correo@correo.com'); 
console.log(persona); 

const cliente=new Cliente ('Miguel', 'cliente@cliente.com', 'codigo con juan'); 
console.log(cliente); 