window.addEventListener("load", () => {
    console.log("page loaded")
})

let searchName;
const txt = document.querySelector("#search_box");
const pic = document.querySelector(".pictures");
const unsplash = document.querySelector("#unsplash");
const init_input = document.querySelector(".input");
const input2 = document.querySelector(".input2");
const cover_p = document.querySelector(".cover_p img");
const io_box = document.querySelector(".io-box");
const output1 = document.querySelector(".output1");
const back_bt = document.querySelector("#back_bt");
const pic_container = document.querySelector(".pic_container");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //to stop form submission
    searchName = txt.value;

    fetch(`https://api.unsplash.com/search/photos?query=${searchName}&client_id=mZPw-CKK4QAA8-T1FUwHhgWwDuHiaeOBD7d8ToskRXg`)
        .then(res => res.json())
        .then(data => {
            let desc = data.results[0].alt_description;
            console.log(desc);
            // let imgLink = data.results[0].urls.small;
            // pic.innerHTML = (`<img src="${imgLink}" alt="${desc}">`) + pic.innerHTML;
            input2.style.display = "none";
            output1.style.display = "flex";
            let imgLink;
            for (let i = 0; i < 6; i++) {
                imgLink = data.results[i].urls.small;
                pic_container.innerHTML += (`<img src="${imgLink}" alt="${desc}" id="img_${i + 1}">`);
                pic_container.style.background = "black";
            }

        })
        .catch(e => {
            console.log("The error is", e);
            alert("Sorry no results found...Please try again!");
        })
})

unsplash.addEventListener("click", () => {
    init_input.style.display = "none";
    input2.style.display = "flex";
})

cover_p.addEventListener("click", () => {
    cover_p.style.display = "none";
    init_input.style.display = "flex";
    io_box.style.width = "800px";
    io_box.style.height = "550px";

})
back_bt.addEventListener("click", () => {
    output1.style.display = "none";
    input2.style.display = "flex";
    pic_container.innerHTML = "";
    console.log("pressed");
})

pic_container.addEventListener("click", (e) => {
    let bt = e.target;
    console.log(bt.id);
    let img_n = document.querySelector(`#${bt.id}`);
    console.log(img_n);
})
// function setup() {
//     const myCanvas = createCanvas(400, 400);
//     myCanvas.parent("canvas-container");
//     background(220, 40, 50);
// }
