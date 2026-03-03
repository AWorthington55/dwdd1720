const redBtn = document.querySelector("#red")
const greenBtn = document.querySelector("#green")
const posterBody = document.querySelector("main")

redBtn.addEventListener('click' , () => posterBody.className = "posterGrid")
greenBtn.addEventListener('click' , () => posterBody.className = "posterList")
