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


function showFriend(friend) {
    console.log(friend)

    //create HTMl elements
    let storeSection = document.createElement('section')
    let storeName = document.createElement('h2')
    let storePhoto = document.createElement('img')
    let storeBirthday = document.createElement('p')
    let storeEmployment = document.createElement('p')
    let storeHobbies = document.createElement('ul')
}//end function