const root = document.querySelector("#root");

const header = document.createElement("header");
const title = document.createElement("h1");
const date = document.createElement("h3");

root.appendChild(header);
header.appendChild(title);
header.appendChild(date);

const main = document.createElement("main");
const copyRight = document.createElement("h4");
const apod = document.createElement("img");
const explanation = document.createElement("p");

root.appendChild(main);
main.appendChild(copyRight);
main.appendChild(apod);
main.appendChild(explanation);

function getAPOD() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => res.json())
        .then(data => {
            title.textContent = data.title;
            date.textContent = data.date;
            copyRight.textContent = data.copyright;
            apod.alt = data.title;
            apod.src = data.url;
            explanation.textContent = data.explanation;
        })
        .catch(err => console.log(err))
}

getAPOD();
