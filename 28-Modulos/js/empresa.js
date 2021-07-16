import {Cliente} from './cliente.js'; 


//Crear una clase en archivo empresa que hereda cosas de clase cliente y la hacemos disponible para donde decida utilizarla
export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro); // lo que hereda de Cliente(constructor)
        this.categoria=categoria; 
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}- Ahorro: ${this.ahorro}- Categoria:${this.categoria}`; 
    }
}