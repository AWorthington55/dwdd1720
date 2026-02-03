document.querySelector('#math').addEventListener('click', () => {
    const width = document.querySelector('#width').value;
    console.log(width);
    const depth = document.querySelector('#depth').value;
    console.log(depth);
    const height = document.querySelector('#height').value;
    console.log(height);
    const paintQuality = document.querySelector('#quality').selectedOptions[0].value;
    console.log(paintQuality)
    let carpet = Math.ceil((width * depth) /9);
    console.log(carpet + " yards of carpet needed.");
    let tackstrip = (width + depth) * 2;
    console.log(tackstrip + " feet of Tackstrip needed.")
    let walls = ((width * height) + (depth * height)) * 2;
    walls = Math.ceil(walls / paintQuality);
    console.log(walls + " gallons of paint needed for the walls.");
    let ceiling = Math.ceil((width * depth) / paintQuality);
    console.log(ceiling + " gallons of paint needed for the ceiling.");
    let primer = ceiling + walls;
    console.log(primer + " gallons of primer needed.")
    addLI('#paint', `${primer} gallons of primer needed for the walls and ceiling.`)
    addLI('#paint', `${walls} gallons of paint needed for the walls.`)
    addLI('#paint', `${ceiling} gallons of paint needed for the ceiling.`)
    addLI('#carpet', `${carpet} yards of carpet needed.`)
    addLI('#carpet', `${carpet} yards of carpet padding needed.`)
    addLI('#carpet', `${tackstrip} feet of tackstrip needed for the carpet.`)
    
}) //end of the calculator function

//function to add list items
let addLI = (list, message) => {
    myList = document.querySelector(list);
    myListItem = document.createElement('li');
    myListItem.textContent = message
    myList.appendChild(myListItem);
}//end of the add list items function