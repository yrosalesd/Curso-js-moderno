class Persona{
    constructor(nombre, email){
        this.nombre=nombre; 
        this.email=email; 
    }
}

class Cliente{
    constructor(nombre, email){
        this.nombre=nombre; 
        this.email=email; 
    }
}

//tenemos funciones externas que vamos a compartir entre diferentes clases
//creando objeto
const funcionesPersona ={
    mostrarInformacion(){
        console.log(`Nombre Persona: ${this.nombre} Email:${this.email} `)
    },
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

//Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona); 
//                    -------------------------copiar lo que tenemos en el prototype de persona
//                                      -------------------Agregamos funciones de persona
//ya en el prototype tendremos mostrarInformacion
Object.assign(Cliente.prototype, funcionesPersona); 

const cliente= new Persona('Juan', 'correo@correo.com'); 
console.log(cliente); 
cliente.mostrarInformacion(); 
cliente.mostrarNombre(); 

const cliente2= new Persona('Cliente', 'cliente@cliente.com'); 
console.log(cliente2); 
cliente2.mostrarInformacion(); 
cliente2.mostrarNombre(); 