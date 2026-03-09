import {people} from '../data/people.js'
console.log(people)
const navigation = document.querySelector('nav')
const peopleInfo = document.querySelector('#info')

const allBtn = document.createElement('button')
allBtn.textContent = "All Characters"
allBtn.addEventListener('click', () => {showPeople(people)})
const girlBtn = document.createElement('button')
girlBtn.textContent = "Female Characters"
girlBtn.addEventListener('click', () => {
    const femaleArray = people.filter(person => person.gender === 'female')
    showPeople(femaleArray)
})
const boyBtn = document.createElement('button')
boyBtn.textContent = "Male Characters"
boyBtn.addEventListener('click', () => {
    const maleArray = people.filter(person => person.gender === 'male')
    showPeople(maleArray)
})
const otherBtn = document.createElement('button')
otherBtn.textContent = "Other Characters"
otherBtn.addEventListener('click', () => {
    const otherArray = people.filter(person => person.gender != 'female' && person.gender != 'male')
    showPeople(otherArray)
})

navigation.appendChild(allBtn)
navigation.appendChild(girlBtn)
navigation.appendChild(boyBtn)
navigation.appendChild(otherBtn)

function showPeople (x) {
    peopleInfo.textContent = ""
    x.forEach(person => {
    const personFigure = document.createElement('figure')
    const personImg = document.createElement('img')
    const explodedArray = person.url.split('/')
    const personNumber = explodedArray[5]
    personImg.src=`//resources.dgmuvu.com/characters/${personNumber}.jpg`
    personImg.alt = person.name
    const personCaption = document.createElement('figcaption')
    personCaption.textContent = person.name
    console.log(person.gender)
    switch (person.gender) {
        case"female":
        personFigure.className = "girl"
        break
        case "male":
        personFigure.className = "boy"
        break
        default:
        personFigure.className = "other"
    }
    personFigure.appendChild(personImg)
    personFigure.appendChild(personCaption)
    peopleInfo.appendChild(personFigure)
    }
    )
}

showPeople(people)