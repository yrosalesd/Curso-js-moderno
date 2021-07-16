const path= require('path'); // importamos la libreria de path, con la cual vamos a saber en que carpeta nos encontramos 

module.exports={
    entry:'./js/app.js',  // archivo principal de este proyecto
    output: {
        path:path.resolve(__dirname, 'public/js'), // no escribir toda la ubicacion de la carpeta de origen y donde desee colocar el proyecto, libreria de node
    //                       ----------------Para que tomo info de ubicacion 
    //                                    ------nombre de carpeta
        filename:'bundle.js' // como se va a llamar archivo 
    },
    mode:'development',// tambien se puede crear una variable de entorno en node y leer en local development, o si esta en un servidor que sea produccion
    devServer: { // pasarle la configuracion 
        contentBase: path.join(__dirname, '/'),  // en que carpeta va a encontrar el contenido, en este caso carpeta principal, porque ahi esta index
        compress: true,
        port: 9000,    // puesto en el que se va a ejecutar 
        publicPath:"/public/js/",//lo que vamos a estar compilando ubicacion
        watchContentBase:true

    }, 
    module:{
        rules: [ // arreglo porque podemos tener diferentes loaders y cada uno se configura en un objeto
            {
                test:/\.js$/,  // test permite identificar diferentes archivos(/\.js$/ busca todos los archivos js en carpeta principal)
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',// loader que bamos a utilizar 
                    options:{
                        presets:['@babel/preset-env']// compila utilizando el preset que hemos instalado previamente 
                    }
                }
            },
            //Agregando segundo loader

            {
                enforce:'pre', // antes de que haga algo, ejecute esta parte E pos que es despues de
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader:'eslint-loader',// hay que instalar este loader 
                options:{
                    fix:true // arregla los errores 
                }
            }
        ]
    }

}