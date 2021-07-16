const formulario=document.querySelector('#formulario'); 
const resultado=document.querySelector('#resultado'); 

document.addEventListener('DOMContentLoaded', ()=>{
    formulario.addEventListener('submit', validarBusqueda); 
})

function validarBusqueda(e){
    e.preventDefault(); 
    
    const busqueda= document.querySelector('#busqueda').value; 

    //validando
    if(busqueda.length <3){
        mostrarMensaje('Busqueda muy corta...Añade mas informacion'); 
        return; 
    }

    consultarAPI(busqueda); 
}

function consultarAPI(busqueda){
    const githubUrl=`https://jobs.github.com/positions.json?search=${busqueda}`; 
    //saltando CORS
    const url=`https://api.allorigins.win/get?url=${ encodeURIComponent(githubUrl) }`; 
    //                                                      ----------------cifrar pero no llega a tal grado , le aplica un encoding a la url que le pasemos 


    axios.get(url)
        .then ( respuesta => mostrarVacantes(JSON.parse(respuesta.data.contents)));  // convertir estructura que tiene la forma de json pero es un string 
}

function mostrarMensaje(msg){
    const alertaPrevia=document.querySelector('.alerta');

    if(!alertaPrevia){
        const alerta=document.createElement('div'); 
        alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta'); 
        alerta.textContent=msg; 
    
        formulario.appendChild(alerta); 
    
        setTimeout(() =>{
            alerta.remove(); 
        }, 3000); 

    }

    
}

function mostrarVacantes(vacantes){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild); 
    }

    if(vacantes.length>0){
        resultado.classList.add('grid'); 

            vacantes.forEach(vacante =>{
                const {company, title, type, url}=vacante; 

                resultado.innerHTML+= `
                <div class="shadow bg-white p-6 rounded">
                    <h2 class="text-2xl font-light mb-4">${title}</h2>
                    <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                    <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                    <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
                </div>             
                    
                `;//imprime todo lo de las vacantes 
            })
    }else{
        const noResultado=document.createElement('p'); 
        noResultado.classList.add('text-center', 'mt-10', 'text-gray-600', 'w-full'); 
        resultado.classList.remove('grid'); 
        noResultado.textContent='No hay vacantes, intenta con otro termino de busqueda'; 
        resultado.appendChild(noResultado); 
    }

}