const argv = require('./yargs_config/yargs').argv;
const getApi = require('./config/getApi');
// const planetas = require('./config/planetas');


let comando = argv._[0];

switch (comando) {
    case 'mostrarActores':
        getApi.getPeople(argv.actores)
            .then(console.log);
        break;

    case 'mostrarPlanetas':
        getApi.getPlanets(argv.planetas)
            .then(console.log);
        // console.log(argv.planetas);
        break;

    case 'starships':
        getApi.getNaves(argv.naves)
            .then(console.log);
        // console.log(argv.naves);
        break;

    default:
        console.log('Comando no es reconocido');

}
// console.log(argv.planetas);



// const encodeUrl = encodeURI(argv.actores);
// console.log(encodeUrl);