const fs = require('fs') //  archivos que son propios de node
    // const express = require('express')   archivos que no son propios de node 
    // const archive = require('./archive') archivos que nosotros creamos en el proyecto
const colors = require('colors')
    // module.exports.crearArchivo = (base) => {

listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = ''

        console.log('=================='.green);
        console.log(`====tabla de ${base}====`.green);
        console.log('=================='.green);

        for (let i = 1; i <= limite; i++) {
            let res = base * i
            data += `${base} * ${i} = ${res}\n`
        }

        resolve(data)

    })
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = ''

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`)
            return
        }

        for (let i = 1; i <= limite; i++) {
            let res = base * i
            data += `${base} * ${i} = ${res}\n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}