const cargarJSONBtn= document.querySelector('#cargarJSON'); 
cargarJSONBtn.addEventListener('click', obtenerDatos); 

function obtenerDatos(){
    const url= 'data/empleado.json'; 
    fetch(url)
        .then( respuesta => respuesta.json())// regresar datos en json
        .then( resultado => mostrarHTML(resultado))// imprimir respuesta 
}

function mostrarHTML({ empresa, id, nombre, trabajo}){
    const contenido= document.querySelector('.contenido'); 

    contenido.innerHTML=`
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa:${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `; 
}