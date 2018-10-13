var weatherKey = config.WEATHER_KEY;

// Returns location of user and runs getWeather upon success
function getLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather, locationError, {timeout: 20 * 1000});
  } else {
    document.getElementById("loading-container").remove();
    document.getElementById("weather-loc").innerHTML = "Browser Error";
  }
}

// Error handling
function locationError(err) {
  console.warn(`WEATHER ERROR(${err.code}): ${err.message}`);
  document.getElementById("loading-container").remove();
  document.getElementById("weather-temp").innerHTML = "N/A"
}

// Processes weather data and updates site
function getWeather(position) {
  var request = new XMLHttpRequest();

  // Retrieving data from api.
  let lat = Math.round(position.coords.latitude * 100) / 100;
  let lon = Math.round(position.coords.longitude * 100) / 100;

  console.log("sending api request");
  request.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=` + weatherKey, true);
  request.send();

  request.onreadystatechange = processRequest;

  function processRequest(e){
    if (request.readyState === 4 && request.status === 200) {
      var response = JSON.parse(request.responseText);
      console.log(response.name);

      // Displays weather icon
      var iconImage = document.getElementById("image");
      var icon = response.weather[0].id;

      switch (true) {
        case (icon < 300): // thunderstorm
          document.getElementById("weather-icon").classList.add('wi-thunderstorm');
          break;

        case (icon < 400): // drizzle
          document.getElementById("weather-icon").classList.add('wi-sprinkle');
          break;

        case (icon < 600): // rain
          document.getElementById("weather-icon").classList.add('wi-rain');
          break;

        case (icon < 700): // snow
          document.getElementById("weather-icon").classList.add('wi-snow');
          break;

        case (icon < 800): // atmosphere
          document.getElementById("weather-icon").classList.add('wi-windy');
          break;

        case (icon === 800): // clear
          document.getElementById("weather-icon").classList.add('wi-day-sunny');
          break;

        case (icon > 800): // cloud
          document.getElementById("weather-icon").classList.add('wi-cloud');
          break;

        default:
          alert("none");
          break;
      }

      // Renders weather data.
      document.getElementById("loading-container").remove();
      document.getElementById("weather-temp").innerHTML = `${Math.round(response.main.temp)}°F`;
      document.getElementById("weather-loc").innerHTML = `${response.name}`
    }
  }
}

getLocation();
