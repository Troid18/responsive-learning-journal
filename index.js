import { journalData } from "./data.js"

const time = document.getElementById("date")
const contentHtml = document.getElementById("content")
const aboutTag = document.getElementById("about")
const AboutHtml = document.getElementById("about-intro")
const introHtml = document.getElementById("intro")
const homeHTML = document.getElementById("home")

function getRealTime(){
    const date = new Date()
    const formarttedDate = date.toLocaleDateString("en-US")
    
    return formarttedDate
}


time.textContent = getRealTime()

function renderHtml(){
    let renderData = ""
    journalData.forEach(data => {
        renderData += `
        <a href="${data.link}" aria-label="Visit link to my ${data.title} project" class="data" target="blank">
            <div>
                <img src=${data.image} alt="A picture of ${data.title}" class="images">
                <p>${getRealTime()}</p>
                <h1>${data.title}</h1>
                <p>${data.description}
            </div>

        </a>
        ` 

    })
    contentHtml.innerHTML = renderData
}

renderHtml()

aboutTag.onclick = function renderAboutHtrml(){
    
   introHtml.style.display = "none"
   AboutHtml.innerHTML = `
        <div id="about-container">
            <img src="./images/background.png" id="about-image">>
            <div id="about-information">
            </div>
        </div>
    
   
   `

}