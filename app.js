const { crearArchivo } = require ('./helpers/multiplicar');
const argv  = require ('./config/yargs');


let base 
base = argv.base
listar = argv.listar
hasta = argv.hasta
console.clear();


console.log (argv);

console.log ('base: yargs', argv.base)


crearArchivo (base,listar,hasta)
.then (nombreArchivo => console.log (nombreArchivo, 'Creado'))
.catch (err =>console.log(err));

