const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&cnt=10&units=metric&appid=245fefc1914be7f21e175a6d4c6046f3`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}