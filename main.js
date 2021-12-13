const root = document.querySelector("#root");

const header = document.createElement("header");
const title = document.createElement("h1");
const date = document.createElement("h3");

root.appendChild(header);
header.appendChild(title);
header.appendChild(date);

let apod;
const main = document.createElement("main");
const copyRight = document.createElement("h4");
const explanation = document.createElement("p");

root.appendChild(main);
main.appendChild(copyRight);

function getAPOD() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${'DEMO_KEY'}`)
    .then(res => res.json())
    .then(data => {
        title.textContent = data.title;
        date.textContent = data.date;
        copyRight.textContent = data.copyright;
        explanation.textContent = data.explanation;
        if (data.media_type === "image") {
                apod = document.createElement("img");
                apod.alt = data.title;
                apod.src = data.url;
                main.appendChild(apod);
                main.appendChild(explanation);
            }
            if (data.media_type === "video") {
                apod = document.createElement("iframe");
                apod.height = '720px';
                apod.width = '1220px';
                apod.src = data.url + '&mute=1';
                main.appendChild(apod);
                main.appendChild(explanation);
            }
            console.log(data)
        })
        .catch(err => console.log(err))
}

getAPOD();
