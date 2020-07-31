const argv = require('yargs')

.command('mostrarActores', 'Muestra la información del Actor', {
        actores: {
            alias: 'a',
            desc: 'Actores Api Star Wars colocar un número entre 0-9',
            demand: true
        }
    })
    .command('mostrarPlanetas', 'Muestra la información de un Planeta', {
        planetas: {
            alias: 'p',
            desc: 'Planetas Api Star Wars colocar un número entre 0-9',
            demand: true
        }
    })
    .command('starships', 'Información de las naves', {
        naves: {
            alias: 'n',
            desc: 'Starships Api Satar Wars colocar un número entre 0-9',
            demand: true
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}