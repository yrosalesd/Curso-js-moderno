const notificarBtn= document.querySelector('#notificar'); 

notificarBtn.addEventListener('click', ()=>{
    Notification // API de notificaciones 
        .requestPermission()// correr metodo que le va a preguntar al usuario si quiere dar permiso para recibir notificaciones 
        .then ( resultado => { // promise 
            console.log('El resultado es', resultado); 
        })

}); 

//ver la notificacion 
const verNotificacion= document.querySelector('#verNotificacion'); 
verNotificacion.addEventListener('click', ()=> {
    if(Notification.permission==='granted'){
        const notificacion= new Notification('Esta es la notificacion', {
            icon: 'img/ccj.png',//agregar un icono personalizado a la notificacion 
            body:'Codigo con Juan, aprende con proyectos reales'// agrega texto a notificacion
        }); 

        notificacion.onclick= function (){
            window.open('https://www.codigoconjuan.com')
        } 
    }
}); 
 