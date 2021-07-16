const efectivo=100;
const credito=100;
const disponible=efectivo+credito;
const totalPagar=600; 

if( efectivo> totalPagar|| credito>totalPagar||disponible>totalPagar){
    console.log('Si podemos pagar')
}else{
    console.log('Fondos insuficientes'); 

}