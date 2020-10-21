

//https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02

const api = {
    key: "bb1b944b0dc413b11969ebc324e24382",
    baseurl:"https://api.openweathermap.org/data/2.5/"
}

const searchbox=document.querySelector('.search-box')
searchbox.addEventListener('keypress',setQuery)
function setQuery(evt){
    if(evt.keyCode==13){
        getResults(searchbox.value)
    //console.log(searchbox.value)
    }}

    function getResults(query){
        fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather=>{
            return weather.json();
        }).then(displayResults)
    }

    function displayResults(weather){
        console.log(weather)
        let city= document.querySelector('.location .city');
        city.innerText=`${weather.name},${weather.sys.country}`

        let now=new Date();
        let date=document.querySelector('.location .date')
        date.innerText=dateBuilder(now)

        let temp = document.querySelector('.current .temp')
        temp.innerHTML=`${Math.round(weather.main.temp)}<span>&deg;c</span>`

        let weather_el =document.querySelector('.current .weather')
        weather_el.innerText=weather.weather[0].main

        let hilow = document.querySelector('.hi-low')
        hilow.innerHTML=`${Math.round(weather.main.temp_min)}<span>&deg;c</span> / ${Math.round(weather.main.temp_min)}<span>&deg;c</span>`

        let humidity=document.querySelector('.hum')
        humidity.innerHTML=`<span>Humidity</span>: ${weather.main.humidity} gm<sup>-3</sup>`

        let pressure=document.querySelector('.pres')
        pressure.innerHTML=`<span>Pressure</span>: ${weather.main.pressure} Pa`

        let longitude=document.querySelector('.long')
        longitude.innerHTML=`<span>Longitude</span>: ${weather.coord.lon} &deg;`

        let latitude=document.querySelector('.lat')
        latitude.innerHTML=`<span>Latitude</span>: ${weather.coord.lat} &deg:`

        let sunrise=document.querySelector('.rise')
        sunrise.innerHTML=`<span>Sunrise</span>: ${weather.sys.sunrise}`

        let sunset=document.querySelector('.set')
        sunset.innerHTML=`<span>Sunset</span>: ${weather.sys.sunset}`

        let wind=document.querySelector('.wind')
        wind.innerHTML=`<span>Wind Speed</span>: ${weather.wind.speed} Km/h`
    
    }
    function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${day} ${date} ${month} ${year}`;
      }