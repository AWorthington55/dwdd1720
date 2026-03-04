import {films} from '../films/films.js'
const newPoster = document.querySelector('.information')
const posterLink = "//resources.dgmuvu.com/films/"

for (let x = 0; x < films.length; x++) {
    let posterInfo = document.createElement('h2')
    posterInfo.innerHTML = `<h2>${films[x].title}</h2>`
    let posterImg = document.createElement('img')
    posterImg.setAttribute('src', posterLink+films[x].url)
    posterImg.setAttribute('alt', films[x].title)
    let infoDiv = document.createElement('div')
    infoDiv.classList.add('info')
    let posterDirector = document.createElement('p')
    posterDirector.textContent = `Director: ${films[x].director}`
    let posterProducer = document.createElement('p')
    posterProducer.textContent = `Producer: ${films[x].producer}`
    let posterRelease = document.createElement('p')
    posterRelease.textContent = `Release Date: ${films[x].release_date}`
    let posterFigure = document.createElement('figure')
    posterFigure.appendChild(posterInfo)
    posterFigure.appendChild(posterImg)
    infoDiv.appendChild(posterDirector)
    infoDiv.appendChild(posterProducer)
    infoDiv.appendChild(posterRelease)
    posterFigure.appendChild(infoDiv)
    newPoster.appendChild(posterFigure)
} // end of for loop

//swapping buttons DO NOT TOUCH OTHERWISE THE CODE WILL BREAK YOU HAVE BEEN WARNED
const redBtn = document.querySelector("#red")
const greenBtn = document.querySelector("#green")
const posterBody = document.querySelector("main")

redBtn.addEventListener('click' , () => posterBody.className = "posterGrid")
greenBtn.addEventListener('click' , () => posterBody.className = "posterList")
