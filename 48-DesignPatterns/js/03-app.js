  // Singleton

  let instancia=null; 

  class Persona{
      constructor(nombre, email){
        if(!instancia){
            this.nombre=nombre; 
            this.email=email; 
            instancia=this; 
        }else{
            return instancia; 
        }
          
      }
  }

  //instanciando
  const persona= new Persona('Juan', 'correo@correo.com'); 
  console.log(persona); 
  const persona2= new Persona('Juan2wwww', 'correo@correo.com');  // si vuelvo a crear una instancia retorna la primera instancia asignada 
  console.log(persona)