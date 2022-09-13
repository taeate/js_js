
const API_KEY = "4357141214d7fd5f69dfac288d1d0e7d";



function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
  }
function onGeoError() {
  alert("error!!");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);