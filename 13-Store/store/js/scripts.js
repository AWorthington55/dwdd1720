import {friends} from "../friend-JSON/friends.js"

//grab HTML
const storeNav = document.querySelector('nav')
const storeView = document.querySelector('#view')

//set up navigation
friends.forEach(friend => {
    console.log(friend)
    const storeBtn = document.createElement('button')
    storeBtn.textContent = `${friend.first} ${friend.last}`
    storeBtn.addEventListener('click', () => showFriend(friend))
    storeNav.appendChild(storeBtn)
})

//create month array
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


function showFriend(friend) {
    console.log(friend)

    //create HTMl elements
    let storeSection = document.createElement('section')
    let storeName = document.createElement('h2')
    let storePhoto = document.createElement('img')
    let storeBirthday = document.createElement('p')
    let storeEmployment = document.createElement('p')
    let storeHobbies = document.createElement('ul')

    //adding stuff to HTML elements
    storeName.textContent = `${friend.first} ${friend.last}`
    storePhoto.src = `../friend-images/${friend.photo}`
    storePhoto.alt = friend.first
    storeEmployment.textContent = `Employment: ${friend.employment}`
    storeBirthday.textContent = `Birthday: ${monthName[(friend.bornMonth)-1]} ${friend.bornDay}, ${friend.bornYear}`

    //adding information to viewer
    storeView.appendChild(storeBirthday)
}//end function