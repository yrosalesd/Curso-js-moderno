
function Cliente(nombre,saldo){
    this.nombre= nombre;
    this.saldo=saldo; 
}

const juan = new Cliente('juan', 500); 

function formatearCliente(Cliente){
    const {nombre, saldo}=Cliente;
    return `El cliente ${nombre} tiene un saldo ${saldo}`;
}

function formatearEmpresa(empresa){
    const{nombre, saldo, categoria}=empresa; 
    return`El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`; 
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria){
    this.nombre=nombre;
    this.saldo=saldo;
    this.categoria=categoria;
}

const CCJ=new Empresa('Codifo con juan', 4000, 'Cursos en línea'); 
console.log(formatearEmpresa(CCJ)); 