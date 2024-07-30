const apiKey = "14e5531f831ba55a41398d591844ec13";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    const weatherCondition = data.weather[0].main;
    console.log("Weather Condition:", weatherCondition);

    let iconPath = "";
    switch (weatherCondition) {
        case "Clouds":
            iconPath = "images/Cloudy.png";
            break;
         case "Mist":
            iconPath = "images/Mist.png";
            break;
        case "Haze":
            iconPath = "images/Haze.png";
            break;
        case "Clear":
            iconPath = "images/Sun.png";
            break;
        case "Rain":
            iconPath = "images/Rain.png";
            break;
        case "Drizzle":
            iconPath = "images/Drizzle.png";
            break;
        case "Thunderstorm":
            iconPath = "images/Thunderstorm.png";
            break;
        default:
            iconPath = "images/Weather.png"; // Default image if none match
            break;
    }

    weatherIcon.src = iconPath;
    console.log("Icon Path:", iconPath);

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
