const suma=function(a,b){
    return a+b; 
}
const resultado=suma; // si puedes asignar una funcion de esta forma, el lenguaje soporta first class function

console.log(resultado(10, 20));  