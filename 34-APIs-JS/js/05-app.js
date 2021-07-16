document.addEventListener('visibilitychange', () => {
                                 //------ cambia la visibilidad de la pagina 
   if(document.visibilityState==='visible'){
       console.log('Ejecutar la funcion para reproducir el video...'); 
   }else{
       console.log('Pausar el video'); 
   }
})
                               