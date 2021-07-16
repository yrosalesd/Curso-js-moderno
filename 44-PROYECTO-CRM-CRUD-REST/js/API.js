const url='http://localhost:4000/clientes';  
//Cuando se crea un nuevo cliente
export const nuevoCliente= async cliente => {
    try {
        await fetch(url, {
            method:'POST',// para crear un nuevo registro 
            body: JSON.stringify(cliente), //contenido de peticion post hacia la url de /clientes, se envia de 2 formas, como string o como objeto
                        //convertir de objeto a string (mandando cliente como metodo post a la url)
            headers:{
                'Content-Type':'application/json'
            } // informacion de que tipo de datos estamos enviando, varia de acuerdo a lo que estes enviando al servidor, si subes archivos es otro
        
        }); 
        window.location.href='index.html'; //nos lleva hacia pagina index una vez que se complete accion anterior correctamente, si detecta un error se sale y cae en el catch
    } catch (error) {
        console.log(error); 
    }
}

//obtiene todos los clientes // lee los datos de la APi, por eso no toma nada 
export const obtenerClientes = async () => {
    try {
        const resultado= await fetch(url); 
        const clientes=await resultado.json(); 
        return clientes; 
    } catch (error) {
        console.log(error); 
    }
}

// Eliminar un cliente... en la api y por lo tanto en el html
export const eliminarCliente=async id =>{
    try {
        await fetch(`${url}/${id}`, {// inyecta el id en la url 
            method:'DELETE'
        }); 
    } catch (error) {
        console.log(error); 
    }
}
//Obtiene un cliente por su ID(toma el id e imprime el cliente(toda la info))
export const obtenerCliente= async id => {
    try {
        const resultado= await fetch(`${url}/${id}`); 
        const cliente= await resultado.json();  
        return cliente; 
        
    } catch (error) {
        console.log(error); 
    }
}

//actualizar un registro
export const editarCliente= async cliente => {
    try{
        await fetch(`${url}/${cliente.id}`,{
            method:'PUT',
            body: JSON.stringify(cliente), 
            headers:{
                'Content-Type':'application/json'
            }
        }); 
        window.location.href='index.html'; // nos lleva a esta pagina 

    }catch(error){
        console.log(error); 
    }
}