import {senators} from "../data/senators.js"
const senatorNav = document.querySelector('nav')
const senatorData = document.querySelector('#data')
console.log(senators)
//navigation here


//function here
function senatorsShow (x) {
   x.forEach(senator => {
    const senatorFigure = document.createElement('figure')

    const senatorPhoto = document.createElement('img')
    const senatorArray = senator.api_uri.split('/')
    const senatorID = [6]
    senatorPhoto.src = `https://unitedstates.github.io/images/congress/225x275/${senator.id}.jpg`
    senatorPhoto.alt = `${senator.first_name} ${senator.last_name}`

    const senatorCaption = document.createElement('h2')
    senatorCaption.textContent = `${senator.first_name}  ${senator.last_name}`

    const senatorBirthday = document.createElement('figcaption')
    senatorBirthday.textContent = `D.O.B: ${senator.date_of_birth}`

    const senatorOtherData = document.createElement('figcaption')
    senatorOtherData.textContent = `${senator.party} from ${senator.state}`



    // showing the data
   
    senatorFigure.appendChild(senatorCaption)
    senatorFigure.appendChild(senatorPhoto)
    senatorFigure.appendChild(senatorBirthday)
    senatorFigure.appendChild(senatorOtherData)

    //send data to HTML
    senatorData.appendChild(senatorFigure)

   } //end of fat arrow function

   )//end of for each function

}//end function here


//calling the function
senatorsShow(senators)