//Module Pattern

const mostrarCliente = nombre => {
    console.log(nombre); 
}

export default mostrarCliente; 


//module pattern anteriormente,  hoy se recomienda export default o export const para lograr lo mismo 95% de los proyectos previos a ES6 utilizan esta forma 

const modulo1=(function(){
    const nombre='Juan'; 

    function hola(){
        console.log('hola')
    }

    return {
        nombre, 
        hola
    }
})(); 