//WeakSet

const weakset = new WeakSet(); 

const cliente={
    nombre:'Juan',
    saldo:100

}

weakset.add(cliente);
//console.log(weakset.has(cliente)); // tue or false 
//weakset.delete(cliente); 

console.log(cliente.size); //no Existe este .size

console.log(weakset); 
