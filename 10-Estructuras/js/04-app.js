const dinero=200;
const totalAPagar=300;
const tarjeta= false;
const cheque=false;

if (dinero >= totalAPagar){
    console.log('si podemos pagar');
} else if(tarjeta){
    console.log('si puedo pagar porque tengo tarjeta');
}else if(cheque){
    console.log('si puedo pagar con cheque');
} else{
    console.log('fondos insuficientes')
}
