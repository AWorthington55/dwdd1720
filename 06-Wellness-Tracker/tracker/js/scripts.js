const findDriver = document.querySelector('#findDriver');
newDriver.addEventListener('click', () =>{
    let firstName = document.querySelector('input[name="first"]');
    localStorage.setItem('driver-first', firstName.value);
    let lastName = document.querySelector('input[name="last"]');
    localStorage.setItem('driver-last', lastName.value);
    let driverName = document.querySelector('#driver');
    letdriverValue = driverName.options[driverName.selectedIndex].value;
    localStorage.setItme('driver-name', driverValue);
    letdriverText = driverName.options[driverName.selectedIndex].text;
    localStorage.setItme('driver-name', driverText);
    let driverTeam = document.querySelector('#team');
    let teamValue = driverTeam.options[driverTeam.selectedIndex].value;
    localStorage.setItem('driver-team', teamValue);
    let driverCountry = document.querySelector('#country');
    let driverNumber = document.querySelector('#number');
    let driverPosition = document.querySelector('#position');
    let driverPoints = document.querySelector('#points');
});
