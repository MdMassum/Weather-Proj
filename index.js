const apiKey = "ed93f92c9ffeb8e7a6561476f9632631";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// constants 
const input = document.querySelector("input");
const btn = document.querySelector(".search button");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
var data;
const weatherimg = document.querySelector(".weather-img img");

// main function -->
async function checkWeather(cityName){

    // api call
    const response = await fetch(apiurl +`${cityName}` + `&appid=${apiKey}`);

    data = await response.json();
    console.log(data);
    console.log(data.cod);

    // check if entered correct city name
    if(data.cod == 404){
        alert("City Name Incorrect");
        return;
    }

    // displaying data -->
    if(cityName == ""){
        alert("Enter Valid City Name");
        return;
    }

    console.log(data.main.temp);
    temp.textContent = data.main.temp + "°C";
    city.textContent = input.value;
    humidity.textContent = data.main.humidity + "%";
    wind.textContent = data.wind.speed + "km/h";

    // change weather img -->
    changeWeatherImg();
}

const changeWeatherImg = () =>{
    
    let weath = data.weather[0].main;
    console.log(weath);

    if(weath == "Clear"){
        weatherimg.src = "images/clear.png";
    }
    else if(weath == "Clouds"){
        weatherimg.src = "images/clouds.png";
    }
    else if(weath == "Drizzle"){
        weatherimg.src = "images/drizzle.png";
    }
    else if(weath == "Rain"){
        weatherimg.src = "images/rain.png";
    }
    else if(weath == "Mist"){
        weatherimg.src = "images/mist.png";
    }
    else if(weath == "Rain"){
        weatherimg.src = "images/rain.png";
    }
    else{
        weatherimg.src = "images/mist.png";
    }
}
btn.addEventListener("click",()=>{
    checkWeather(input.value);
});