//Factory- Crea objetos basados en ciertas condiciones 

class InputHTML {
    constructor(type, nombre){
        this.type=type; 
        this.nombre= nombre; 
    }

    //metodo: 
    crearInput(){
        return`<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`; //basado en los datos de arriba va a crear diferentes inputs 
    }
}

//segunda clase 
class HTMLFactory{
    crearElemento(tipo, nombre){
        switch(tipo){ // vamos a evaluar 
            case 'text':
                return new InputHTML('text', nombre)
            case 'tel':
                return new InputHTML('tel', nombre)
            case 'email': 
                return new InputHTML('email', nombre)



            default:
                return; 
        }
    }
}
// como utilizar HTMFactory para que cree las instancias de InputHTML y nos traiga el crearInput

const elemento= new HTMLFactory(); 
const inputText= elemento.crearElemento('text', 'nombre-cliente'); 
console.log(inputText.crearInput()); // todo esto solo para crear un imput de tipo text

const elemento2= new HTMLFactory(); 
const inputText2= elemento2.crearElemento('tel', 'telefono-cliente'); 
console.log(inputText2.crearInput()); 

//estamos instanciando la misma clase, pero cada objeto va a ser diferente basado en ciertas condiciones 

const elemento3= new HTMLFactory(); 
const inputText3= elemento3.crearElemento('email', 'email-cliente'); 
console.log(inputText2.crearInput()); // todo esto solo para crear un imput de tipo text

//asi podemos crear diferentes tipos de objetos basados en diferentes tipos de condiciones 