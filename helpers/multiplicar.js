const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("El valor introducido no es un número");
            return;
        }

        let data = "";
        data += '==============\n';
        data += `Tabla del ${base}\n`;
        data += '==============\n';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //escribe en el archivo, si no existe lo crea
        fs.writeFile(`./salida/tabla-${base}.txt`, data, (err) => {
            //si por alguna razon falla lanza un error
            if (err) reject(err);
            //si el archivo se pudo grabar
            resolve(`tabla-${base}.txt`);
            console.log("El archivo ha sido guardado".green);
        });
    });
};

//lista la tabla de acuerdo a la base y el limite
const listarTabla = (base, limite = 10) => {
    console.log('=============='.rainbow.bold);
    console.log(`Tabla del ${base}`.rainbow.bold);
    console.log('=============='.rainbow.bold);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.brightMagenta.bgBlack);
    }
};

//se exporta la funcion a lo largo de todo el programa, ya que por defaul solo se pueden acceder
//en este archivo
module.exports = {
    crearArchivo,
    listarTabla,
};