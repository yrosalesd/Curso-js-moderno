
//pasandole parametros 
/*const aprendiendo=function(tecnologia){
    console.log(`aprendiendo ${tecnologia}`);

}
//llamando
aprendiendo('javascript');*/

// con arrow

/*const aprendiendo2= (tecnoligia) => `aprendiendo ${tecnoligia}`;

console.log(aprendiendo2('javascript'));*/ 

//cuando pasas solo un parametro parentesis no son necesarios

/*const aprendiendo2= tecnoligia => `aprendiendo ${tecnoligia}`;
console.log(aprendiendo2('javascript'));*/

//con 2 parametros 
const aprendiendo=function(tecnologia, tecnologia2){
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('Javascript','Node.js');


///con arrow
const aprendiendo2=(tecnologia,tecnologia2)=>`Aprendiedo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('Javascript','Node.js'));




