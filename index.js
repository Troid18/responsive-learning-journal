import { journalData } from "./data.js"

const time = document.getElementById("date")
const contentHtml = document.getElementById("content")
const aboutTag = document.getElementById("about")
const AboutHtml = document.getElementById("about-intro")
const introHtml = document.getElementById("intro")
const homeTag = document.getElementById("home")

function getRealTime(){
    const date = new Date()
    const formattedDate = date.toLocaleDateString("en-US")
    
    return formattedDate
}


time.textContent = getRealTime()

function renderHtml(){
    let renderData = ""
    journalData.forEach(data => {
        renderData += `
        <a href="${data.link}" aria-label="Visit link to my ${data.title} project" class="data ${data.id}" target="blank">
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

aboutTag.onclick = function renderAboutHtml(){
    
   introHtml.style.display = "none"
   AboutHtml.innerHTML = `
        <div id="about-container">
            <img src="./images/about.jpg" id="about-image">
            <div id="about-information">
                <h1> Hi there! My name is <span>Musa</span> and welcome to my learning journal. </h1>
                <p> I'm a software engineer graduate and now pursuing web development(frontend). I'm currently working on upskilling my frontend skills using react and javascript. I have build complex projects on my learning journey that i would like for you to check out. </p>
            </div>
        </div>
    
   
   `

}

homeTag.onclick = function renderHomeHtml(){
    AboutHtml.innerHTML = ""
    introHtml.style.display = "block"
}