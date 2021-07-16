const criptomonedasSelect=document.querySelector('#criptomonedas'); 
const monedaSelect= document.querySelector('#moneda'); 
const formulario=document.querySelector('#formulario'); 
const resultado=document.querySelector('#resultado'); 


const objBusqueda={// se van a lenar conforme el usuario seleccione su busqueda 
    moneda:'', 
    criptomoneda:''
}
//Crear un promise
const obtenerCriptomonedas = criptomonedas => new Promise (resolve => {
    resolve(criptomonedas); 
}); // descarga criptomonedas 



document.addEventListener('DOMContentLoaded', ()=>{
    consutarCriptomonedas(); 

    formulario.addEventListener('submit', submitFormulario); 

    criptomonedasSelect.addEventListener('change', leerValor); 
    monedaSelect.addEventListener('change', leerValor); // esto pasa en automatioc porque los select tienen el nombre name: "criptomoneda" y el otrp name: "moneda" por eso es que se mapean los valores correctamente
})

async function consutarCriptomonedas(){
    const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'; //url de criptomonedas populares (limit=10)

        // fetch(url)
        //     .then( respuesta => respuesta.json())
        //     .then( resultado => obtenerCriptomonedas(resultado.Data))
        //     .then( criptomonedas => selectCriptomonedas(criptomonedas))

    try {

        const respuesta= await fetch(url); // await porque requieren que se allan completado los anteriores
        const resultado= await respuesta.json(); 
        const criptomonedas= await obtenerCriptomonedas(resultado.Data); 
        selectCriptomonedas(criptomonedas); 
        
    } catch (error) {
        console.log(error); 
        
    }

}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach( cripto => {
        const {FullName, Name} = cripto.CoinInfo; 

        const option= document.createElement('option'); 
        option.value= Name; //codigo de 3 digitos
        option.textContent= FullName; // texto que si entiende el usuario
        criptomonedasSelect.appendChild(option); 
    })
    
}

function leerValor(e){
    objBusqueda[e.target.name]=e.target.value; // name en el html igual a name en el objeto 
    //console.log(objBusqueda); 
}

function submitFormulario(e){
    e.preventDefault(); 

    // validar
    const {moneda, criptomoneda}= objBusqueda;

    if(moneda===''|| criptomoneda===''){
        mostrarAlerta('Ambos campos son obligatorios'); 
        return; 
    }

    //Consultar la API con los resultados
    consultarAPI(); 

}

function mostrarAlerta(msg){

    const existeError=document.querySelector('.error'); 
    

    if(!existeError){
        const divMensaje =document.createElement('div'); 
        divMensaje.classList.add('error'); 

        //mensaje de error
        divMensaje.textContent=msg; 
        formulario.appendChild(divMensaje); 

        setTimeout(() => {
            divMensaje.remove(); 
        }, 3000); 
    }

    
}

async function consultarAPI(){
    const {moneda, criptomoneda}=objBusqueda;

    const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`; 

    mostrarSpinner(); 

    /*fetch(url)
        .then( respuesta => respuesta.json())
        .then( cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);//acceder al objeto de forma dinamica , leer desde objeto de busqueda, objeto dinamico, le pasa los valores adecuados 
        })*/

    try {
        const respuesta= await fetch(url); 
        const cotizacion= await respuesta.json(); 
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);//acceder al objeto de forma dinamica , leer desde objeto de busqueda, objeto dinamico, le pasa los valores adecuados 
    } catch (error) {
        console.log(error)
    }
}

function mostrarCotizacionHTML(cotizacion){

    limpiarHTML(); 

    const{ PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE}= cotizacion; 

    const precio=document.createElement('p'); 
    precio.classList.add('precio'); 
    precio.innerHTML=`El Precio es: <span>${PRICE}</span>`; 

    const precioAlto=document.createElement('p'); 
    precioAlto.innerHTML=`<p>Precio mas alto del dia: <span>${HIGHDAY}</span>`; 

    const precioBajo=document.createElement('p'); 
    precioBajo.innerHTML=`<p>Precio mas bajo del dia: <span>${LOWDAY}</span>`; 

    const ultimasHoras=document.createElement('p'); 
    ultimasHoras.innerHTML=`<p>Variacion ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`; 

    const ultimaActualizacion= document.createElement('p'); 
    ultimaActualizacion.innerHTML=`<p>Ultima Actualizacion: <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio); 
    resultado.appendChild(precioAlto); 
    resultado.appendChild(precioBajo); 
    resultado.appendChild(ultimasHoras); 
    resultado.appendChild(ultimaActualizacion); 
   

}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild); 
    }
}

function mostrarSpinner(){
    limpiarHTML(); 
    
    const spinner= document.createElement('div'); 
    spinner.classList.add('spinner'); 

    spinner.innerHTML=`
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `; 

    resultado.appendChild(spinner); 
}