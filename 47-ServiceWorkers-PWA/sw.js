//nombre del cache
const nombreCache='apv-v6'; 

const archivos=[ //archivos que vamos a estar cacheando, y en caso de que no tengamos conexion a internet va a obtener una copia de ese cache o leer esos datos de cache, y va a mostrarlos, eso es lo que hace una PWA muy rapida 
    //tambien en caso de que halla conexion a internet y ya visitamos el sitio web, entonces va a cargar los datos de cache
    // si tenemos 2 paginas, a y b , visitamos pag a eso descarga el cache, si vas a la pag b, tambien descarga el cache, si por algo el visitante solo visita una pagina, pero despues sin conexion intenta visitar la pagina b no va a funcionar, podrias agregar esa 
    //segunda pag al cache, pero si agregas todo el sitio web a cache, va a ser algo lento ese catching y una PWA debe ser rapida
   
    '/', // cacheamos la pagina principal
    '/index.html', //cacheando index.html 
    // puedes agregar mas paginas pero no agregar demasiadas porque lo hace mas lento 
    
    '/error.html',

    // para apariencia cacheamos:
    '/css/bootstrap.css',
    '/css/styles.css', //tambien podrias cachear imagenes si tuvieras, puedes cachear fuentes, cualquier archivo en realidad que sea necesario para que tu app funcione sin conexion a internet

    '/js/app.js',
    '/js/apv.js',
   //puede que aqui se tenga que agregar el manifest 
    
]




//cuando se instala el service worker, se ejecuta una vez cuando el service worker se instala, si recargamos ya no se ejecuta de nuevo similar a index db cuando se creba la BD  
self.addEventListener('install', e => {
    console.log('Instalado el service worker'); 

    //espera hasta que se hallan descargado todos los archivos 
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache =>{
                console.log('cacheando'); //los vamos cacheando 
                cache.addAll(archivos)//los agregamos al cache //addAll para agregar un arreglo de archivos, si solo fuera un archivo solo se le pone add
            }) 
    )
}); 

//Activar el service worker, no aparece esto en consola, pero en Application>service workers> skipWaiting se activa, entonces se ejecuta y ya aparece en consola
self.addEventListener('activate', e =>{
    console.log('Service worker Activado'); 
    
    e.waitUntil(
        caches.keys()//hasta que se cumpla la parte de obtener los archivos cache que aparecen en inspeccionar
            .then(keys => {
                //console.log(keys); 

                return Promise.all(
                    keys.filter( key => key !== nombreCache) // solo traiga el que tiene mismo nombre que esta en este archivo 
                        .map(key => caches.delete(key)))// elimine los que sobran 
            })
    )
});


//-------------------------------------------------------------------------------
//registrar el fetch 
//Evento fetch para descargar archivos estaticos
// self.addEventListener('fetch', e =>{
//     console.log('fetch...', e);  

//     e. respondWith(//dale esta respuesta, una vez que estemos haciendo este fetch 
//         caches.match(e.request) // indentificar el request que se esta haciendo 
//             .then( respuestaCache => {
//                 return respuestaCache //en caso de que sea igual a lo que tenemos en cache, entonces cargamos el cache
//             })
//             .catch(() => caches.match('/error.html')) // muestra pag de error, request a algo que no hemos cacheado, algo que no hemos visitado previamente, no funciona por lo tanto agregamos pagina de error al arreglo de archivos para que se cachee y se descargue previamente 
    
//     )
//}) 
//--------------------------------------No funciono, otra alternativa: 

self.addEventListener('fetch', e =>{
    console.log('fetch...', e);  

    e. respondWith(//dale esta respuesta, una vez que estemos haciendo este fetch 
        caches
            .match(e.request) // indentificar el request que se esta haciendo 
            .then( respuestaCache => (respuestaCache ? respuestaCache : caches.match('error.html')))
    )

}) 