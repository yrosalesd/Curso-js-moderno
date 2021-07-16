const autenticado=true;
if(autenticado){
    console.log('El usuario esta autenticado')
}

const puntaje=310;

function revisrPuntaje(){
    if(puntaje>400){
        console.log('excelente!!');
        return;
    }

    if(puntaje>300){
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisrPuntaje(); 