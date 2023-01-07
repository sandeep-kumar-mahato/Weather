const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b1e925a9d9mshf546fba2675f997p14ea07jsna3298c299306",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      /* cloud_pct.innerHTML = response.cloud_pct; */
      cloud_pct3.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      temp3.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      feels_like3.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      humidity3.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      min_temp3.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      max_temp3.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_speed3.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_degrees3.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunrise3.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      sunset3.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    mumbai_cloud_pct.innerHTML = response.cloud_pct;
    mumbai_temp.innerHTML = response.temp;
    mumbai_feels_like.innerHTML = response.feels_like;
    mumbai_humidity.innerHTML = response.humidity;
    mumbai_min_temp.innerHTML = response.min_temp;
    mumbai_max_temp.innerHTML = response.max_temp;
    mumbai_wind_speed.innerHTML = response.wind_speed;
    mumbai_wind_degrees.innerHTML = response.wind_degrees;
    mumbai_sunrise.innerHTML = response.sunrise;
    mumbai_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    kolkata_cloud_pct.innerHTML = response.cloud_pct;
    kolkata_temp.innerHTML = response.temp;
    kolkata_feels_like.innerHTML = response.feels_like;
    kolkata_humidity.innerHTML = response.humidity;
    kolkata_min_temp.innerHTML = response.min_temp;
    kolkata_max_temp.innerHTML = response.max_temp;
    kolkata_wind_speed.innerHTML = response.wind_speed;
    kolkata_wind_degrees.innerHTML = response.wind_degrees;
    kolkata_sunrise.innerHTML = response.sunrise;
    kolkata_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    Hyderabad_cloud_pct.innerHTML = response.cloud_pct;
    Hyderabad_temp.innerHTML = response.temp;
    Hyderabad_feels_like.innerHTML = response.feels_like;
    Hyderabad_humidity.innerHTML = response.humidity;
    Hyderabad_min_temp.innerHTML = response.min_temp;
    Hyderabad_max_temp.innerHTML = response.max_temp;
    Hyderabad_wind_speed.innerHTML = response.wind_speed;
    Hyderabad_wind_degrees.innerHTML = response.wind_degrees;
    Hyderabad_sunrise.innerHTML = response.sunrise;
    Hyderabad_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jamshedpur",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    Jamshedpur_cloud_pct.innerHTML = response.cloud_pct;
    Jamshedpur_temp.innerHTML = response.temp;
    Jamshedpur_feels_like.innerHTML = response.feels_like;
    Jamshedpur_humidity.innerHTML = response.humidity;
    Jamshedpur_min_temp.innerHTML = response.min_temp;
    Jamshedpur_max_temp.innerHTML = response.max_temp;
    Jamshedpur_wind_speed.innerHTML = response.wind_speed;
    Jamshedpur_wind_degrees.innerHTML = response.wind_degrees;
    Jamshedpur_sunrise.innerHTML = response.sunrise;
    Jamshedpur_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

let day = document.getElementById("day");
let sunny = document.getElementById("sunny");

if ((temp) => 27) {
  day.innerText = "Sunny";
}
