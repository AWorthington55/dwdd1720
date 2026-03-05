import {people} from '../data/people.js'
console.log(people)
const navigation = document.querySelector('nav')
const peopleInfo = document.querySelector('#info')
function showPeople (x) {
    x.forEach(person => {
    const personFigure = document.createElement('figure')
    const personImg = document.createElement('img')
    const personCaption = document.createElement('figcaption')
    personCaption.textContent = person.name
    personFigure.appendChild(personImg)
    personFigure.appendChild(personCaption)
    peopleInfo.appendChild(personFigure)
    }
    )
}

showPeople(people)