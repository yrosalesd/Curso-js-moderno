// tomando las siguientes posiciones 
const carrito = document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody') //tbody es la parte donde se agregan los cursos en el carrito 
const vaciarCarritoBtn= document.querySelector('#vaciar-carrito'); 
const listaCursos=document.querySelector('#lista-cursos'); 
let articulosCarrito = []; // carrito vacio al principio


cargarEventListeners()


//creamo una funcion donde registremos los event Listener
function cargarEventListeners(){

    //cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso); 

    //Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito=[]; // reseteamos el arreglo
        limpiarHTML(); //eliminamos todo el html 
    })
}


//funciones 
function agregarCurso(e){
    //para que la pantalla no se vaya hacia arriba 
    e.preventDefault(); 

    //evitando el event bobling 
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado=e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}
//Elimina un curso del carrito 
function eliminarCurso(e){
    //console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id'); 
          
        //ELimina del arreglo articulosCarrito por el data-id
        articulosCarrito=articulosCarrito.filter( curso => curso.id !== cursoId); 
        //console.log(articulosCarrito);  
        carritoHTML(); //iterar sobre el carrito y mostrar o agregar su html 
    }
}

//leer el contenido del HTML al que le dimos click y extrae la informacion del curso 
function leerDatosCurso(curso){
    //console.log(curso); 
    //crear un objeto con el contenido del curso actual
    const infoCurso ={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1 
    }
 // Revisa si un elemento ya existe en el carrito
const existe = articulosCarrito.some(curso => curso.id === infoCurso.id); 
if(existe){
    //Actualizamos la cantidad 
    const cursos= articulosCarrito.map (curso => {
        if(curso.id===infoCurso.id){
            curso.cantidad++;
            return curso; // retorna el objeto actualizado a fuerza tenemos que retornar porque .map crea un nuevo objeto y no podemos perder ningun valor 
        }else{
            return curso; //retorna los objetos que no son duplicados es importante a fuerza retornar 
        }
    });
    articulosCarrito=[...cursos];
}else{
    //agrega elementos al arreglo de carrito 
    articulosCarrito  = [... articulosCarrito, infoCurso];
}


    //Agrega elementos al arreglo de carrito 
    //articulosCarrito  = [... articulosCarrito, infoCurso]; //acumulo al copiar el mismo y agrego el objeto con la info del curso 
    console.log(articulosCarrito); 

    carritoHTML()
}

//Muestra el carrito de compras en el html 

function carritoHTML(){

    //limpiar el HTML 
    limpiarHTML()
    //Recorreo el carrito y genera el html 

    articulosCarrito.forEach( curso => {
        const{ imagen, titulo, precio, cantidad, id} = curso; 
        const row = document.createElement('tr');
        row.innerHTML=`
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td> 
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
            `;//agregando info a la celda


            //agregar el html del carrito en el body 
            contenedorCarrito.appendChild(row) // va agregando pero no limpia 
    });
}

//Elimina los cursos del tbody 
function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML=''; 
while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
}

}