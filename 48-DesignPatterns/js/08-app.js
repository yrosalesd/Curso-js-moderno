function Vendedor(nombre){
    this.nombre=nombre; 
    this.sala=null; 
}

Vendedor.prototype={
    oferta:(articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`); 
    }, 
    vendido:Comprador=>{
        console.log(`Vendido a ${Comprador}`); 
    }
}

function Comprador(nombre){
    this.nombre=nombre; 
    this.sala=null; // una vez que sea creada la subasta, se van a llenar esto en comprador y vendedor, y van a estar en una misma sala

}

Comprador.prototype={
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}

function Subasta(){ //aqui se agrupan para comunicarse uno con otro
// colocar al vendedor y al comprador en la misma sala 
    let compradores={}; 

    return{
        registrar: usuario => {
            compradores[usuario.nombre]= usuario;  // creando una propiedad nueva (saber la info del usuario )
            usuario.sala=this;
        }
    }
}

//Crear objetos (forma de comunicar todos estos objetos al mismo tiempo)
const juan=new Comprador('Juan'); 
const pablo=new Comprador('Pablo'); 
const vendedor=new Vendedor('Vendedor de Autos'); 
const subasta=new Subasta(); 

// antes de que halla ofertas , la subasta tiene que registrarlos 
//subasta es el mediador, el que comunica tanto vendedor con compradores(comunica diferentes objetos)
subasta.registrar(juan); 
subasta.registrar(pablo); 
subasta.registrar(vendedor);
//esta de arriba es la sala, para participar en la compra  



vendedor.oferta('Mustang 66', 300); 

juan.oferta(350, juan); 
pablo.oferta(450,pablo); 
juan.oferta(500, juan); 
pablo.oferta(700, pablo); 

vendedor.vendido('Pablo'); 