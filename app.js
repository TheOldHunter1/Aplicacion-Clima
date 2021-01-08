const { getLugarLatLng } = require('./Clima/Clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log('====== salida ======');
        console.log(`La temperatura para ${resp.direccion} es de ${resp.Temp} grados`);
        console.log('====================');
    })
    .catch(err => {
        console.log('====== salida ======');
        console.log(`No se pudo determinar la temperatura para ${argv.direccion}`);
        console.log('====================');
    })