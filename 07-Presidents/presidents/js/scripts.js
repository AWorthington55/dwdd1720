import {presidents} from '../data/presidents.js'
const createCard = document.querySelector('#cards');
const setLink = "//resources.dgmuvu.com/presidents/"

for (let x = 0; x < presidents.length; x++) {
    let presidentName = document.createElement('div')
    presidentName.innerHTML = `<h2>${presidents[x].name}</h2>`
    
    let presidentImg = document.createElement('img')
    presidentImg.setAttribute('src', setLink+presidents[x].photo)
    presidentImg.setAttribute('alt', presidents[x].name)
    let presidentCaption = document.createElement('figcaption')
    presidentCaption.innerHTML = `Served from ${presidents[x].took_office} to ${presidents[x].left_office} <br> Lived from ${presidents[x].born} to ${presidents[x].died} <br> Party: ${presidents[x].party}`
    let presidentFigure = document.createElement('figure')
    presidentFigure.appendChild(presidentName)
    presidentFigure.appendChild(presidentImg)
    presidentFigure.appendChild(presidentCaption)
    createCard.appendChild(presidentFigure)
} //end of the for loop

console.log(presidents)