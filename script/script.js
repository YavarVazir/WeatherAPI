var cityName = document.getElementById("cityname");
var weather = document.getElementById("weather");
var icons = document.getElementById("icon");
var temperature = document.getElementById("temperature");
var icon;

function getWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f065d1ea237f52fd6f8e4431b0861551&units=metric`)
        .then(response => response.json())
        .then(data => {
            cityName.innerHTML = data.name;
            weather.innerHTML = data.weather[0].description;
            icon = data.weather[0].icon;
            icons.setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
            temperature.innerHTML = data.main.temp + " &#8451;";
        }).catch(error => ("City Not Found!"));
};