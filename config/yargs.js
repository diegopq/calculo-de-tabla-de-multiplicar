
const options = {
    //configuracion de flags que el comando listar puede recibir
    base: {
        demandOption: true,
        alias: "b", //el alias es la abreviacion del comando en terminal en lugar de usar 
        //--base se usa - b
        describe: "Indica la base de la tabla de multiplicar"
    },
    limite: {
        alias: "l",
        default: 10,
        describe: "Indica el numero maximo de la tabla de multiplicar"
    },
};

const argv = require("yargs")
    .command(
        "listar",
        //descripcion de lo que hace el comando
        "Imprime en consola la tabla de multiplicar",
        options
    )
    .command(
        "crear",
        //descripcion de lo que hace el comando
        "Genera un archivo con la tabla de multiplicar",
        options
    )
    //help permite mostra la descripcion al pedir la ayuda con el flag --help
    .help().argv; //argv contiene los parametros que se pasan en la terminal

//exportamos el objeto argv
module.exports = argv;