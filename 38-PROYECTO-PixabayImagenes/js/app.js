const resultado=document.querySelector('#resultado'); 
const formulario=document.querySelector('#formulario'); 
const paginacionDiv=document.querySelector('#paginacion'); 

const registrosPorPagina= 40; 
let totalPaginas; //para que este disponible en todas la funciones
let iterador; 
let paginaActual=1; 

window.onload=() => {
    formulario.addEventListener('submit', validarFormulario); 
}

function validarFormulario(e){
    e.preventDefault(); 

    const terminoBusqueda=document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('Agregar un termino de busqueda'); 
        return; 
    }

    buscarImagenes(); 
}

function mostrarAlerta(mensaje){
    const existeAlerta  = document.querySelector('.bg-red-100'); 

    if(!existeAlerta){
        const alerta= document.createElement('p'); 
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center'); 
    
        alerta.innerHTML=`
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
            `; 
    
            formulario.appendChild(alerta); 
    
            setTimeout(() =>{
                alerta.remove(); 
            }, 3000);

    }

     
}

function buscarImagenes(){
    
    const termino=document.querySelector('#termino').value; 

    const key='20407877-bff5313c9288c8ff3739decb5';
    const url=`https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then( respuesta => respuesta.json())
        .then(resultado =>{
            
            totalPaginas=calcularPaginas(resultado.totalHits);
            console.log(totalPaginas);  
            mostrarImagenes(resultado.hits); 
        })

}

// generador que va a registrar la cantidad de paginas
function* crearPaginador(total){
    for (let i=1; i<= total; i++){
       yield  i; 
    }
}




function calcularPaginas(total){
    return parseInt(Math.ceil(total/registrosPorPagina)); 
}

function mostrarImagenes(imagenes){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild); 
    }

    //Iterar sobre el arreglo de imagenes y construir el html 
    imagenes.forEach(imagen => {//imagenes es un arreglo
        const {previewURL, likes, views, largeImageURL}= imagen; 
        //       -----------------------------------------------------------imagen de baja resolucion
        //                                    ----------------------------------------imagen de alta resolucion 

        resultado.innerHTML += //toma la mitad, mediano una terceraparte, mas largo toma una cuarta parte, y se van acomodando las imagenes // dependiendo del tamaño de la pantalla 
            `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}"> 

                    <div class="p-4">
                        <p class="font-bold"> ${likes} <span class="font-light"> Me gusta </span> </p>
                        <p class="font-bold"> ${views} <span class="font-light"> Veces Vista </span> </p>

                        <a 
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                        > 
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </div>
        `; //target="_blank" rel="noopener noreferrer"> // abrir la imagen en una nueva pestaña // arreglar problema de seguridad 
    }); 

    // limpiar el paginador previo 
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild)
    }

    //Generamos el nuevo HTML 
    imprimirPaginador(); 
}

function imprimirPaginador(){
    iterador=crearPaginador(totalPaginas); 

    while(true){// mientras no lleguemos al final del generador
        const {value, done}= iterador.next(); 
        if(done) return; 

        //caso contrario, genera un boton por cada elemento en el generador 
        const boton= document.createElement('a');
        boton.href='#'; // no lleva a ningun lado, solo nos lleva de una pagina a otra 
        boton.dataset.pagina=value; 
        boton.textContent=value; 
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded' ); 
       
        boton.onclick=()=>{
            paginaActual=value; 

            buscarImagenes(); // volvemos a consultar nuestra api con un numero de paginacion diferente
        }

        paginacionDiv.appendChild(boton); 
    }


}