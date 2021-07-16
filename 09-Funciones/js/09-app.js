const reproductor={
    reproducir: function(id){
        console.log(`reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...')
    },
    borrar:function(id){
        console.log(`Borrando cancion...${id}`)
    },
    crearPlaylist:function(nombrePlaylist){
    console.log(`Creando playlist ${nombrePlaylist}`); 
    }, 
    reproduciendoPlaylist:function(nombrePL){
        console.log(`Reproduciendo playlist con el nombre de ${nombrePL}`);
    }
    
}

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausar();

//agregando una llave
/*reproductor.borrar=function(id){
    console.log(`Borrando cancion...${id}`)

}*/

reproductor.borrar(30);///se ponen parentesis porque es una funcion 
reproductor.crearPlaylist('Musica pop');
reproductor.reproduciendoPlaylist('Musica para dormir'); 