const restaurantApp={}; 

//le definimos una nueva propiedad al objeto (todo queda en namespace de restaurant app)
restaurantApp.platillos =[
    {
        platillo:'Pizza',
        precio:25
    },
    {
        platillo:'Hamburguesa', 
        precio:20
    },
    {
        platillo:'Hot Dog', 
        precio: 20
    }
]; 

//agregandole funciones
restaurantApp.funciones={
    mostrarMenu: platillos =>{
        console.log('Bienvenidos a nuestro menu');

        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.precio}`)

        }); 
    },
    ordenar: id =>{
        console.log(`Tu Platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`)
    },
    agregarPlatillo:(platillo,precio) => {
        const nuevo={
            platillo,
            precio
        }; 
        restaurantApp.platillos.push(nuevo); 
    }
}


restaurantApp.funciones.ordenar(1); 
restaurantApp.funciones.agregarPlatillo('Taco', 20); 
const{platillos} = restaurantApp; 
//para acceder: muy dificilmente va a chocar con otro objeto o funcion que se llame igual
restaurantApp.funciones.mostrarMenu(platillos); 
