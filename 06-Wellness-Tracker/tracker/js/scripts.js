const form = document.querySelector('#driverForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstName = document.querySelector('input[name="first"]');
    localStorage.setItem('driver-first', firstName.value);
    let lastName = document.querySelector('input[name="last"]');
    localStorage.setItem('driver-last', lastName.value);
    let driverName = document.querySelector('#driverSelect');
    const driverValue = driverName.options[driverName.selectedIndex].value;
    localStorage.setItem('driver-value', driverValue);
    const driverText = driverName.options[driverName.selectedIndex].text;
    localStorage.setItem('driver-name', driverText);
    let driverTeam = document.querySelector('#team');
    let driverCountry = document.querySelector('#country');
    let driverNumber = document.querySelector('#number');
    let driverPosition = document.querySelector('#position');
    let driverPoints = document.querySelector('#points');

   

const checkDriver = localStorage.getItem('driver-first');

if (checkDriver === null) {
    document.querySelector('#firstProfile').className = "showDriver";
    document.querySelector('#nextProfile').className = "hideDriver";
    //do nothing
} else {
    document.querySelector('#firstProfile').className = "hideDriver";
    document.querySelector('#nextProfile').className = "showDriver";
     if (driverText === "Lando Norris") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Mclaren";
        localStorage.setItem('driver-team', "Mclaren");
        driverCountry.textContent = "Great Britain";
        driverNumber.textContent = "1";
        driverPosition.textContent = 'first';
        driverPoints.textContent = '423';
    } else if (driverText === "Max Verstappen") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Red Bull Racing";
        localStorage.setItem('driver-team', "Red Bull Racing");
        driverCountry.textContent = "Netherlands";
        driverNumber.textContent = "3";
        driverPosition.textContent = 'second';
        driverPoints.textContent = '421';
    } else if (driverText === "Oscar Piastri") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Mclaren";
        localStorage.setItem('driver-team', "Mclaren");
        driverCountry.textContent = "Australia";
        driverNumber.textContent = "81";
        driverPosition.textContent = 'third';
        driverPoints.textContent = '410';
    } else if (driverText === "George Russell") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Mercedes";
        localStorage.setItem('driver-team', "Mercedes");
        driverCountry.textContent = "Great Britain";
        driverNumber.textContent = "63";
        driverPosition.textContent = 'fourth';
        driverPoints.textContent = '310';
    } else if (driverText === "Charles Leclerc") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Ferrari";
        localStorage.setItem('driver-team', "Ferrari");
        driverCountry.textContent = "Monaco";
        driverNumber.textContent = "16";
        driverPosition.textContent = 'fifth';
        driverPoints.textContent = '242';
    } else if (driverText === "Lewis Hamilton") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Ferrari";
        localStorage.setItem('driver-team', "Ferrari");
        driverCountry.textContent = "Great Britain";
        driverNumber.textContent = "44";
        driverPosition.textContent = 'sixth';
        driverPoints.textContent = '156';
    } else if (driverText === "Kimi Antonelli") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Mercedes";
        localStorage.setItem('driver-team', "Mercedes");
        driverCountry.textContent = "Italy";
        driverNumber.textContent = "12";
        driverPosition.textContent = 'seventh';
        driverPoints.textContent = '150';
    } else if (driverText === "Alex Albon") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Williams";
        localStorage.setItem('driver-team', "Williams");
        driverCountry.textContent = "Thailand";
        driverNumber.textContent = "23";
        driverPosition.textContent = 'eighth';
        driverPoints.textContent = '73';
    } else if (driverText === "Carlos Sainz") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Williams";
        localStorage.setItem('driver-team', "Williams");
        driverCountry.textContent = "Spain";
        driverNumber.textContent = "55";
        driverPosition.textContent = 'ninth';
        driverPoints.textContent = '64';
    } else if (driverText === "Fernando Alonso") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Aston Martin";
        localStorage.setItem('driver-team', "Aston Martin");
        driverCountry.textContent = "Spain";
        driverNumber.textContent = "14";
        driverPosition.textContent = 'tenth';
        driverPoints.textContent = '56';
    } else if (driverText === "Nico Hulkenberg") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Kick Sauber";
        localStorage.setItem('driver-team', "Kick Sauber");
        driverCountry.textContent = "Germany";
        driverNumber.textContent = "27";
        driverPosition.textContent = 'eleventh';
        driverPoints.textContent = '51';
    } else if (driverText === "Isack Hadjar") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Racing Bulls";
        localStorage.setItem('driver-team', "Racing Bulls");
        driverCountry.textContent = "France";
        driverNumber.textContent = "6";
        driverPosition.textContent = 'twelfth';
        driverPoints.textContent = '51';
    } else if (driverText === "Ollie Bearman") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Haas";
        localStorage.setItem('driver-team', "Haas");
        driverCountry.textContent = "Great Britain";
        driverNumber.textContent = "87";
        driverPosition.textContent = 'thirteenth';
        driverPoints.textContent = '41';
    } else if (driverText === "Liam Lawson") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Racing Bulls";
        localStorage.setItem('driver-team', "Racing Bulls");
        driverCountry.textContent = "New Zealand";
        driverNumber.textContent = "30";
        driverPosition.textContent = 'fourthteenth';
        driverPoints.textContent = '38';
    } else if (driverText === "Esteban Ocon") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Haas";
        localStorage.setItem('driver-team', "Haas");
        driverCountry.textContent = "France";
        driverNumber.textContent = "31";
        driverPosition.textContent = 'fifteenth';
        driverPoints.textContent = '38';
    } else if (driverText === "Lance Stroll") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Aston Martin";
        localStorage.setItem('driver-team', "Aston Martin");
        driverCountry.textContent = "Canada";
        driverNumber.textContent = "18";
        driverPosition.textContent = 'sixteenth';
        driverPoints.textContent = '33';
    } else if (driverText === "Yuki Tsunoda") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Red Bull Racing";
        localStorage.setItem('driver-team', "Red Bull Racing");
        driverCountry.textContent = "Japan";
        driverNumber.textContent = "22";
        driverPosition.textContent = 'seventeenth';
        driverPoints.textContent = '33';
    } else if (driverText === "Pierre Gasly") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Alpine";
        localStorage.setItem('driver-team', "Alpine");
        driverCountry.textContent = "France";
        driverNumber.textContent = "10";
        driverPosition.textContent = 'eighteenth';
        driverPoints.textContent = '22';
    } else if (driverText === "Gabriel Bortoleto") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Kick Sauber";
        localStorage.setItem('driver-team', "Kick Sauber");
        driverCountry.textContent = "Brazil";
        driverNumber.textContent = "5";
        driverPosition.textContent = 'nineteenth';
        driverPoints.textContent = '19';
    } else if (driverText === "Franco Colapinto") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Alpine";
        localStorage.setItem('driver-team', "Kick Alpine");
        driverCountry.textContent = "Argentina";
        driverNumber.textContent = "43";
        driverPosition.textContent = 'twentieth';
        driverPoints.textContent = '0';
    } else if (driverText === "Jack Doohan") {
        document.querySelector('#first').textContent = localStorage.getItem('driver-first');
        document.querySelector('#last').textContent = localStorage.getItem('driver-last');
        document.querySelector('#driver').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverList').textContent = localStorage.getItem('driver-name');
        document.querySelector('#driverData').textContent = localStorage.getItem('driver-name');
        document.querySelector('#icon').src = localStorage.getItem('driver-value');
        driverTeam.textContent = "Alpine";
        localStorage.setItem('driver-team', "Alpine");
        driverCountry.textContent = "Australia";
        driverNumber.textContent = "7";
        driverPosition.textContent = 'twenty-first';
        driverPoints.textContent = '0';
    }
    else {
        driverTeam.textContent = " ";
        driverCountry.textContent = " ";
        driverNumber.textContent = " ";
        driverPosition.textContent = " ";
        driverPoints.textContent = " ";
    }
}

const deleteDriver = document.querySelector('#newDriver');
deleteDriver.addEventListener('click', () =>{
    localStorage.removeItem('driver-first');
    localStorage.removeItem('driver-last');
    localStorage.removeItem('driver-value');
    localStorage.removeItem('driver-name');
    localStorage.removeItem('driver-team');
    location.reload();
});
});




