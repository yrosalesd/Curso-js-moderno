const usuario=true;
const puedePagar=false;

if(usuario && puedePagar){
    console.log('si puedes comprar')
} else if (!puedePagar && !usuario){
    console.log('No puedes comprar')
} else if(!usuario){
    console.log('inicia sesion o saca una cuenta'); 
}else if(!puedePagar){
    console.log('Fondos insufientes'); 
}