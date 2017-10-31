//let weatherLink = document.getElementById("get_forecast")
//weatherLink.addEventListener("click", getWeather);




let getWeather = function() {
  let latitude = '41.8781';
  let longitude = '-87.6298';
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude

  //let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?lat=42&lon=88'
openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}

let link = document.getElementById("get_forecast")
link.addEventListener("click", getWeather)

let convertDataToJSON = function(response) {
  return response.json();}


let updateWeather = function(dataFromService){
  temperature = dataFromService.main.temp;
  location = dataFromService.name;
  image = dataFromService.weather.id;

document.querySelector("#weather h4").innerHTML=location;
document.querySelector("#weather p").innerHTML= temperature; }




let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}


//FOR GEOLOCATION:
// function getLocation() {
//        navigator.geolocation.getCurrentPosition(showPosition);}
// function showPosition(position)   {
//    let latitude = position.coords.latitude
//    let longitude = position.coords.longitude;
//}

// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
