//get HTML 
const weatherParent = document.querySelector('#weatherInfo')
const weatherCity = document.querySelector('#city')

//write the default zipcode
let zip = localStorage.getItem('myZipcode')
if (zip == null) {
    let zipcodeDefault = "84062"
    localStorage.setItem('myZipcode', zipcodeDefault)
    zip = zipcodeDefault
} //end if
console.log(zip)

//set the path to the API for the weather
const myKey = "9bbf76d4e9e7288dc6482d0d1f5797bc"
const myAPI = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${myKey}&units=imperial`

//fetch remote JSON data for current weather
fetch(myAPI)
    .then((response) => response.json())
    .then((weatherData) => {
        console.log(weatherData)
        weatherCurrent(weatherData)
    })

//function for displaying the current weather
function weatherCurrent(results){
    console.log(results)
    console.log(results.weather[0].icon)
    //current date info
    const weatherDate = document.createElement('p')
    weatherDate.className = "date"
    const d = new Date()
    weatherDate.textContent = d.toDateString()

    //current icon
    const weatherImage = document.createElement('img')
    weatherImage.src=`https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`
    weatherImage.alt = results.weather[0].description

    //add correct city name
    weatherCity.textContent = `Weather for ${results.name}`

    //current temperature
    const weatherTemp = document.createElement('p')
    weatherTemp.className = "temp"
    weatherTemp.innerHTML = "Current temperature: " + results.main.temp + "&deg;F"

    //current "feels like" temp
    const weatherFeels = document.createElement('p')
    weatherFeels.className = "feelsLike"
    weatherFeels.innerHTML = "Feels like " + results.main.feels_like + "&deg;F"

    //current humidity
    const weatherHumidity = document.createElement('p')
    weatherHumidity.className = "humidity"
    weatherHumidity.innerHTML = "Humidity level: " + results.main.humidity + "%"

    //current wind speed
    const weatherSpeed = document.createElement('p')
    weatherSpeed.className = "windSpeed"
    weatherSpeed.innerHTML = "Wind speed: " + results.wind.speed + " MPH"

    //assemble card
    weatherParent.appendChild(weatherDate)
    weatherParent.appendChild(weatherImage)
    weatherParent.appendChild(weatherTemp)
    weatherParent.appendChild(weatherFeels)
    weatherParent.appendChild(weatherHumidity)
    weatherParent.appendChild(weatherSpeed)
    
}//end of function


//ask for new zipcode

//validating data for the zipcode