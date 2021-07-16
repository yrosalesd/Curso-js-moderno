//eliminar 
localStorage.removeItem('nombre'); 

//Actualizar un registro 
const mesesArray=JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray)); 

//limpiar todo el localStorage
localStorage.clear(); 