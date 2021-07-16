const cargarTxtBtn= document.querySelector('#cargarTxt'); 
cargarTxtBtn.addEventListener('click', obtenerDatos); 

function obtenerDatos(){

    const url= 'data/datos.txt'; 
    fetch(url)
          //------ url de donde van a venir los datos o a donde se van a enviar los datos 
      .then(respuesta => {
          console.log(respuesta); 
          console.log(respuesta.status); 
          console.log(respuesta.statusText); 
          console.log(respuesta.url); 
          console.log(respuesta.type); 


          return respuesta.text()// porque es texto // la respuesta la quiero como text 
      })
      .then(datos => {
          console.log(datos)
      })// entonces imprime los datos 
      .catch (error => {
          console.log(error); // este seria el reject del promise  si no se lo pones y algo esta mal, el codigo no te va a decir que esta pasando 
      })
}  