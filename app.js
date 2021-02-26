//al inicio van todo lo que son los requires
//existen 3 tipos de require :
//const fs = require("fs"); //librerias que ya vienen en node
//const fs = require('express'); paquetes externos a node
//const fs = require('./fs'); paquetes que se crean en el proyecto se identifican con ./path

//importa el objeto
const argv = require("./config/yargs");
//importa la funcion crear por medio de desestructuración
const { crearArchivo, listarTabla } = require("./helpers/multiplicar");

const colors = require("colors");

//limpia la consola o terminal
console.clear();

//recibimos el primer comando que se escriba en la terminal
let comando = argv._[0];

//validamos que el comando sea correcto
switch (comando) {
    case "listar":
        //se realiza lo correspondiente al comando listar
        listarTabla(argv.base, argv.limite);
        break;

    case "crear":
        //crea el archivo con la tabla de multiplicar
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo.yellow}`.green))
            .catch((e) => console.log(e));
        break;
    default:
        console.log(`Comando "${comando}" no reconocido`.red.bold);
        break;
}