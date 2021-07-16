const salida= document.querySelector('#salida'); 
const microfono= document.querySelector('#microfono'); 

microfono.addEventListener('click', ejecutarSpeechAPI); 

function ejecutarSpeechAPI(){
    const SpeechRecognition= webkitSpeechRecognition; // esta en ventana global 
    const recognition= new SpeechRecognition(); // instanciando 

    recognition.start(); // comenzar speechRecognitionAPI

        // funcion que  se ejecuta cuando recognition comience a ejecutarse 
    recognition.onstart = function(){
        salida.classList.add('mostrar'); // como tiene clase de ocultar, hay que agregarle la clase de mostrar esta en app.css
        salida.textContent='Escuchando...'; 

    }; 

    // cuando hallamos terminado de hablar se ejecuta una funcion 
    recognition.onspeechend= function(){
        salida.textContent='Se dejo de grabar...'; 
        recognition.stop(); 
    }; 

    // lo que yo halla hablado en el microfono hacia texto 
    recognition.onresult= function(e){
        console.log(e.results[0][0]); // acceder a lo que dije .results

        const {confidence, transcript}= e.results[0][0]; 

        const speech = document.createElement('p');
        speech.innerHTML=`Grabado: ${transcript}`; 

        const seguridad= document.createElement('p'); 
        seguridad.innerHTML=`Seguridad: ${parseInt(confidence*100)} %`; 

        salida.appendChild(speech); 
        salida.appendChild(seguridad); 
    }
}