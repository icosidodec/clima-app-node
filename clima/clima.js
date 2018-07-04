const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=603bfbc9c58e698f4c187e9dc5f18dfd`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}