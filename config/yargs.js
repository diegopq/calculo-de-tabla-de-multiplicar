const options = {
    //configuracion de flags que el comando listar puede recibir
    base: {
        demand: true,
        alias: "b", //el alias es la abreviacion del comando en terminal en lugar de usar --base se usa -b
    },
    limite: {
        alias: "l",
        default: 10,
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
module.exports = {
    argv,
};