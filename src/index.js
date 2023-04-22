//date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

let h6 = document.querySelector("h6");
h6.innerHTML = day + " " + hour + ":" + minute;

//Temperature of a city
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#today");
  temp.innerHTML = temperature;
  let humidity = response.data.main.humidity;
  let hum = document.querySelector(".humidity");
  hum.innerHTML = humidity;
  let windSpeed = response.data.wind.speed;
  let wind = document.querySelector(".wind");
  wind.innerHTML = Math.round(windSpeed);
}

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-name");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;
  let apiKey = "a95c2c6739994ba4903e007ee817e7d1";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput.value +
    "&appid=" +
    apiKey +
    "&units=metric";

  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCity);

//Temperature for current position

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiUrlCurrent =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=ff1d9ea9376b5c27a82e04fc2b2abdbb&units=metric";
  axios.get(apiUrlCurrent).then(showTemperature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let current = document.querySelector("#currentButton");
current.addEventListener("click", getCurrentPosition);
