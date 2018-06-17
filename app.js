// const axios = require('axios');

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async() => {
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${argv.direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));


// clima.getClima(20.6596988, -103.3496092)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));
// let lugarUrl = encodeURI(argv.dirección);
// console.log(lugarUrl);

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ lugarUrl }&key=AIzaSyD2c8YKvqhpeYLmpREVW7nBIZkbw-0TB2g`)
//     .then(resp => {
//         //console.log(JSON.stringify(resp.data, undefined, 2));
//         // console.log(resp.status);
//         let location = resp.data.results[0];
//         let coords = location.geometry.location;
//         console.log('Dirección:', location.formatted_address);
//         console.log('Latitud:', coords.lat);
//         console.log('Longitud', coords.lng);
//     })
//     .catch(e => console.log('Error:', e));