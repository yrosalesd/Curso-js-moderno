const reproductor={

    cancion:'',
    reproducir: id => `reproduciendo cancion con el id ${id}`,
    pausar: () => console.log('pausando...'),
    borrar:id => `Borrando cancion...${id}`,
    crearPlaylist:nombrePlaylist => `Creando playlist ${nombrePlaylist}`, 
    reproduciendoPlaylist: nombrePL => `Reproduciendo playlist con el nombre de ${nombrePL}`,  
    
    set nuevaCancion(cancion){
        this.cancion=cancion; 
        console.log(`Añadiendo ${cancion}`); 
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}


reproductor.nuevaCancion='Enter sandman'; 
reproductor.obtenerCancion;



console.log(reproductor.reproducir(20));
console.log(reproductor.reproducir(30));
reproductor.pausar();

//agregando una llave
/*reproductor.borrar=function(id){
    console.log(`Borrando cancion...${id}`)

}*/

console.log(reproductor.borrar(30));///se ponen parentesis porque es una funcion 
console.log(reproductor.crearPlaylist('Musica pop'));
console.log(reproductor.reproduciendoPlaylist('Musica para dormir')); 