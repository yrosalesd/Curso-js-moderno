// funcion que retorna una funcion (una funcion que tiene dentro otra funcion)
const obtenerCliente = () => ()=> console.log('Juan Pablo'); 

const  fn = obtenerCliente(); // asignamos funcion

fn(); //mandamos ejecutar la funcion