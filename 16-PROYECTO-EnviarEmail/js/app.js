//Variables
const btnEnviar=document.querySelector('#enviar');
const btnReset=document.querySelector('#resetBtn');
const formulario=document.querySelector('#enviar-mail');
//Variables para campos
const email=document.querySelector('#email');
const asunto=document.querySelector('#asunto');
const mensaje=document.querySelector('#mensaje'); 

const er= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //expresion regular 
//la paso aqui para que sea global por el scope

eventListeners(); 


function eventListeners(){
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp); // se encarga de arrancar todo 

    //campos del formulario 
    email.addEventListener('blur', validarFormulario);// el campo no puede ir vacio por eso el blur 
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);
    //Enviar Email 
    formulario.addEventListener('submit', enviarEmail); 
}

//funciones

function iniciarApp(){
    btnEnviar.disabled=true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50'); //agregando clases de css tailwind 
}

//valida el formulario
function validarFormulario(e){
    
    if(e.target.value.length > 0 ){
        //cuando se elimina error....
        const error=document.querySelector('p.error') //seleccionar lo que se eliminara
        if(error){
            
            error.remove(); // lo eliminamos 
        }

        e.target.classList.remove('border', 'border-red-500');// eliminar clase que no utilice
        e.target.classList.add('border', 'border-green-500');
    }else{
       //e.target.style.borderBottomColor='red'; 
       //e.target.classList.add('error');
       e.target.classList.remove('border', 'border-green-500');// eliminar clase que no utilice 
       e.target.classList.add('border', 'border-red-500');//poner campo en rojo 
       mostrarError('Todos los campos son obligatorios'); 
       
    }

    if(e.target.type ==='email'){ 
        
        //const resultado=e.target.value.indexOf('@'); //revisa que exista almenos un arroba 
        /*if(resultado < 0){
            mostrarError('Email no valido');
        }*/

        if(er.test(e.target.value)){

            const error=document.querySelector('p.error') //seleccionar lo que se eliminara
            if(error){ // porque sin este if estaba tratando de eliminar un elemento que no Existe 
               error.remove(); // lo eliminamos 
            }

            e.target.classList.remove('border', 'border-red-500');// eliminar clase que no utilice
            e.target.classList.add('border', 'border-green-500');
        
        }else{

            e.target.classList.remove('border', 'border-green-500');//poner campo en rojo
            e.target.classList.add('border', 'border-red-500');//poner campo en rojo 
            mostrarError('Email no valido');    
        }
    }  

    if(er.test( email.value) && asunto.value !== '' && mensaje.value != ''){
        //activando boton 
        btnEnviar.disabled=false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
    }

} 

function mostrarError(mensaje){
    const mensajeError=document.createElement('p');
    mensajeError.textContent=mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'backgroud-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center',
    'error'); //tailwind etiquetas

    const errores=document.querySelectorAll('.error');//pongo all porque solo en este existe length 
    if(errores.length ===0 ){
        formulario.appendChild(mensajeError); // agrega al final 
        //formulario.insertBefore(mensajeError,document.querySelector('.mb-10')); // ubicacion antes de la clase donde estaba en consola
    }
    
    

}

//enviar el imail
function enviarEmail(e){
    e.preventDefault(); 

    //Mostrar el spinner 
    const spinner=document.querySelector('#spinner');
    spinner.style.display='flex'; 
    
    
    //despues de 3 segundos ocultamos el spiner con un timer de 3 segundos  y mostramos el mensaje de enviado
    setTimeout(() =>{
        spinner.style.display='none';
        
        //Mensaje que dice que se envio correctamente
        const parrafo=document.createElement('p');
        parrafo.textContent='El mensaje se envio correctamente';
        
        //dandole estilos al parrafo anterior
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')


        //Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner); 

        setTimeout(()=>{
            parrafo.remove(); //elimina mensaje de mensaje enviado
            resetearFormulario();
        
        }, 5000);


    },3000); 


}


//funcion que resetea el formulario 
function resetearFormulario(e){

    
    formulario.reset();  
    iniciarApp(); //para que reaparezca en voton de enviar bloqueado 
    e.preventDefault();////lo agregue para que progrma funcionara
} 