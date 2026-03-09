import {senators} from "../data/senators.js"
const senatorNav = document.querySelector('nav')
const senatorData = document.querySelector('#data')
console.log(senators)
//navigation here

//create all senators button
const senatorsAll = document.createElement('button')
senatorsAll.textContent = "All Senators"
senatorsAll.addEventListener('click', () => {senatorsShow(senators)})
senatorNav.appendChild(senatorsAll)

//create Republican senators button
const senatorsRepublican = document.createElement('button')
senatorsRepublican.textContent = "Republican Senators"
senatorsRepublican.addEventListener('click', () => {
    const republicans = senators.filter(senator => senator.party === 'R')
    senatorsShow(republicans)
})

senatorNav.appendChild(senatorsRepublican)

//create democrat senators button
const senatorsDemocrat = document.createElement('button')
senatorsDemocrat.textContent = "Democrat Senators"
senatorsDemocrat.addEventListener('click', () => {
    const democrats = senators.filter(senator => senator.party === 'D')
    senatorsShow(democrats)
})

senatorNav.appendChild(senatorsDemocrat)

//create other senator button
const senatorsOther = document.createElement('button')
senatorsOther.textContent = "Other Senators"
senatorsOther.addEventListener('click', () => {
    const other = senators.filter(senator => senator.party != "R" && senator.party != "D")
    senatorsShow(other)
})

senatorNav.appendChild(senatorsOther)

//create male senators button
const senatorsMale = document.createElement('button')
senatorsMale.textContent = "Male Senators"
senatorsMale.addEventListener('click', () => {
    const males = senators.filter(senator => senator.gender === 'M')
    senatorsShow(males)
})

senatorNav.appendChild(senatorsMale)

//create female senators button
const senatorsFemale = document.createElement('button')
senatorsFemale.textContent = "Female Senators"
senatorsFemale.addEventListener('click', () => {
    const females = senators.filter(senator => senator.gender === 'F')
    senatorsShow(females)
})

senatorNav.appendChild(senatorsFemale)

//function here
function senatorsShow (x) {
   senatorData.textContent = ""
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

    const senatorGender = document.createElement('figcaption')
    senatorGender.textContent = `Gender: ${senator.gender}`

    //assign parties to senators
    switch (senator.party) {
        case "R":
        senatorFigure.className = "republican"
        break;
        case "D":
        senatorFigure.className = "democrat"
        break;
        case "F":
        default:
        senatorFigure.className = "Other"
    }//end of switch case

    // showing the data
   
    senatorFigure.appendChild(senatorCaption)
    senatorFigure.appendChild(senatorPhoto)
    senatorFigure.appendChild(senatorBirthday)
    senatorFigure.appendChild(senatorGender)
    senatorFigure.appendChild(senatorOtherData)

    //send data to HTML
    senatorData.appendChild(senatorFigure)

   } //end of fat arrow function

   )//end of for each function

}//end function here


//calling the function
senatorsShow(senators)