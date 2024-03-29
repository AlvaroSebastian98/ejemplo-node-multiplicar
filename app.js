const argv = require('./config/yargs').argv
    // const { argv } = require('./config/yargs') // también funciona de esta manera
const colors = require('colors/safe')

const { crearArchivo } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/multiplicar')



let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err))
        break
    default:
        console.log('Comando no reconocido');
}

// console.log(argv)

// console.log(argv.base)

// let parametro = argv[2]
// let base = parametro.split('=')[1]