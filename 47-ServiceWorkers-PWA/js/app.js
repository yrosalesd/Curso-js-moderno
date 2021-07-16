// verificar si soporta el service workers
if('serviceWorker' in navigator){
    //registrando service worker 
    navigator.serviceWorker.register('./sw.js')// retorna un promise
        .then(registrado => console.log('Se instalo correctamente...', registrado))
        .catch(error => console.log('Fallo la instalacion...', error)); 
}else{
    console.log('Service Workers no soportados'); 
}