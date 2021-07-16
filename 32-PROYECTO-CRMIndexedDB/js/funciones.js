// lo que si se puede compartir entre diferentes Archivos

let DB; 

function conectarDB(){
    const abrirConexion= window.indexedDB.open('crm', 1); 
    
    abrirConexion.onerror=function(){
        console.log('Hubo un error'); 
    }; 

    abrirConexion.onsuccess=function(){
        console.log( 'conexion exitosa'); 

        DB=abrirConexion.result; 
    }
}

function imprimirAlerta(mensaje, tipo){

    const alerta=document.querySelector('.alerta'); 

    if(!alerta){

        //crear alerta
        const divMensaje=document.createElement('div'); 
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-log', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta'); // tailwind

        if(tipo==='error'){
            divMensaje.classList.add('bd-red-100', 'border-red-400', 'text-red-700'); 

        }else{
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700'); 
        }

        divMensaje.textContent= mensaje; 
        formulario.appendChild(divMensaje);
        
        setTimeout(() => {
            divMensaje.remove(); 
        }, 3000); 
    }
    
}