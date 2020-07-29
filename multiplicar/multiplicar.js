const fs = require("fs");
const colors = require("colors");

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("El valor introducido no es un número");
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            //si por alguna razon falla lanza un error
            if (err) reject(err);
            //si el archivo se pudo grabar
            resolve(`tabla-${base}.txt`);
            console.log("El archivo a sido guardado".green);
        });
    });
};

//lista la tabla de acuerdo a la base y el limite
let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.blue);
    }
};

//se exporta la funcion a lo largo de todo el programa
module.exports = {
    crearArchivo,
    listarTabla,
};