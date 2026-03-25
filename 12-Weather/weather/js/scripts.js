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
    })
//function for displaying the current weather

//ask for new zipcode

//validating data for the zipcode