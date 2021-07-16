document.addEventListener('DOMContentLoaded', () => {

    // habilitamos intersection observer 
    const observer = new IntersectionObserver( entries =>{

        if(entries[0].isIntersecting){
            console.log('Ya esta visible');
        }
        
    }); 

        // le decimos que elemento vamos a observar y cuando elemento este visible o no este visible nos lo va a ir reportando en el entries de arriba 
    observer.observe(document.querySelector('.premium')); 
}) 