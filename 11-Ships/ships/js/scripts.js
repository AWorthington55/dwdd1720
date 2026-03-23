//grab the data and wait for results
fetch("data/starships.json")
    .then((response) => response.json())
    .then((shipArray) => {
        createNav(shipArray)
    })

//populate navigation bar
function createNav(ships) {
    console.log(ships)
    ships.forEach(ship => {
        let shipBtn = document.createElement('button')
        shipBtn.textContent = ship.name
        shipBtn.addEventListener('click', () => shipShow(ship))
        navigation.appendChild(shipBtn)
    })//end of for each loop
}

//showing the ships

function shipShow(shipData) {
    let shipFigure = document.createElement('figure')
    let shipImg = document.createElement('img')
    let shipCaption = document.createElement('figcaption')
    console.log(shipData.url)
    let urlArray = shipData.url.split('/')
    console.log(urlArray[5])
    shipImg.src = `https://resources.dgmuvu.com/ships/${urlArray[5]}.jpg`
    shipImg.addEventListener('error', () => {
        shipImg.src = "https://resources.dgmuvu.com/ships/placeholder.jpg"
        shipCaption.textContent = `Unfortunately, the ${shipData.name} got blown up by the Death Star =(`
    })

    shipCaption.textContent = shipData.name
    shipFigure.appendChild(shipImg)
    shipFigure.appendChild(shipCaption)
    view.textContent = " "
    view.appendChild(shipFigure)
    
    
}

//add links to html
const navigation = document.querySelector('nav')
const view = document.querySelector('main')