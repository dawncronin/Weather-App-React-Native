const API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM= "http://api.openweathermap.org/data/2.5/weather?"


function fetchForcast(zip) {
    return fetch(`${API_STEM}q=${zip}&units=imperial&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(json => {
        return{
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp
        }
    })
    .catch(error => {
        console.error(error);
    })
}

export default {fetchForcast}