let astros;
let flag = false;

window.addEventListener('load', () => {
    fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            astros = data.people;
            flag = true;
        })
})


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(230, 124, 34);
    fill(43, 54, 128);
    if (flag) {
        for (let i = 0; i < astros.length; i++) {
            ellipse(random(width), random(height), 50, 50);
        }
    }
}