// const cliente='Juan'; 

// function mostrarCLiente(){
//     console.log(cliente); 
// }
// mostrarCLiente(); // se muestra juan porque es una variable global

/////////////////////////////////////////////////////////////////////////

//si la variable esta adentro y el console.log se da por fuera 
// function mostrarCLiente(){
//     const cliente='Juan'; // error porque variable solo E entre estas llaves (scope de una funcion o bloque de codigo)
// }
// console.log(cliente); 

// mostrarCLiente();

///////////////////////////////////////////////

// const cliente='Juan';
// const cliente='Pedro'; // error porque la variable ya ha sido definida 

// function mostrarCLiente(){
// console.log(cliente); 
// }
    
// mostrarCLiente();

/////////////////////////////////////////////////////

// const cliente='Juan';// esta en el scope global 

// function mostrarCLiente(){
//     const cliente='Pedro'; // Aqui ya se detectan como 2 variables diferentes, y te detecta pedro, si quito esta linea, muestra Juan, esto pasa porque tiene prioridad en el scope
//     console.log(cliente); 
// }
    
// mostrarCLiente();

///////////////////////////////////////

// const login=true; 

// function clienteLoagueado(){
//     const cliente='Juan'; 
//     console.log(cliente); //scope por bloque

//     if(login){
//         const cliente='Admin'; 
//         console.log(cliente); //scope por bloque 
//     }
// }

//clienteLoagueado(); 

//////////////////////////////////////////////////////

const login=true; 

function clienteLoagueado(){
    const cliente='Juan'; 
    console.log(cliente); //scope por bloque

    if(login){
        console.log(cliente); // antes de variable, por lo tanto toma juan
        
        const cliente='Admin'; 
        
    }
}
 
clienteLoagueado(); 

// puedes crear variables con el mismo nombre siempre que esten en diferente scope