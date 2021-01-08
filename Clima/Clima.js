const axios = require('axios');
const config = require('../config/config.json');

const getLugarLatLng = async(direccion) => {

    const encodedUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `${config.configAPI.URL}?appid=${config.configAPI.APIKey}&q=${encodedUlr}&units=metric`,
        timeout: 1000,
        headers: {
            'x-rapidapi-key': config.configAPI.xrapidapikey
        }
    });

    var resp = await instance.get()
        .catch(err => { throw new Error(`No hay resultados ${direccion}`) });

    // console.log(resp.data);

    return {
        "direccion": resp.data.name,
        "lat": resp.data.coord.lat,
        "lng": resp.data.coord.lon,
        "Temp": resp.data.main.temp
    }
}

module.exports = {
    getLugarLatLng
}