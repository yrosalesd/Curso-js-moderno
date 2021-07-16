// implicit bindig: se da por implicito donde encontrar el valor, dice de una forma clara con la palabra this, donde va a encontrar sus valores

// const usuario={
//     nombre: 'Juan', 
//     edad: 20,
//     informacion(){
//         console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`); 
//     }
// }

// usuario.informacion(); // marca error porque tenemos que decirle en que lugar va encontrar valores

////////////////////////por lo tanto this: 
const usuario = {
    nombre: 'Juan', 
    edad: 20,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`); // que se encuentran en este objeto 
    },
    mascota:{
        nombre:'Hook', 
        edad: 1,
        informacion(){// metodo
            console.log(`Mi ombre es ${this.nombre} y mi edad es ${this.edad}`)// no se mezcla con lo de arriba porque busca en este objeto de mascota
        }
    }
}

usuario.informacion(); 
usuario.mascota.informacion(); 