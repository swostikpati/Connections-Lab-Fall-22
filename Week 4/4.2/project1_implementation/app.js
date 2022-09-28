// const { pbkdf2 } = require("crypto");

window.addEventListener("load", () => {
    console.log("page loaded")
})

let searchName;
const txt = document.querySelector("#search_box");
// const pic = document.querySelector(".pictures");
const unsplash = document.querySelector("#unsplash");
const init_input = document.querySelector(".input");
const input2 = document.querySelector(".input2");
const cover_p = document.querySelector(".cover_p img");
const io_box = document.querySelector(".io-box");
const output1 = document.querySelector(".output1");
const back_bt = document.querySelector("#back_bt");
const pic_container = document.querySelector(".pic_container");
const canvas = document.querySelector("#canvas");
const output2 = document.querySelector(".output2");
const back_bt2 = document.querySelector("#back_bt2");
const takepic_bt = document.querySelector("#takepic_bt");
const canvas2 = document.querySelector("#canvas2");
const back_bt3 = document.querySelector("#back_bt3");
const import_img = document.querySelector("#import_img");
const input4 = document.querySelector(".input4");
const form_fin = document.querySelector("#form_fin");
const file_upload = document.querySelector("#file_upload");
const save_bt = document.querySelector("#save_canvas");
const back_bt4 = document.querySelector("#back_bt4")
// const arrow_bt = document.querySelector("#")

let chr;
// let flag = false;
// let f2 = false;
form.addEventListener("submit", (e) => {
    e.preventDefault(); //to stop form submission
    searchName = txt.value;
    chr = searchName;

    fetch(`https://api.unsplash.com/search/photos?query=${searchName}&client_id=mZPw-CKK4QAA8-T1FUwHhgWwDuHiaeOBD7d8ToskRXg`)
        .then(res => res.json())
        .then(data => {
            // f2 = false;

            let desc;
            // console.log(desc);
            // let imgLink = data.results[0].urls.small;
            // pic.innerHTML = (`<img src="${imgLink}" alt="${desc}">`) + pic.innerHTML;


            let imgLink;
            console.log(data.results[0].urls.small);
            // f2 = true;


            input2.style.display = "none";

            console.log("yes");
            for (let i = 0; i < 6; i++) {
                imgLink = data.results[i].urls.small;
                desc = data.results[i].alt_description;
                // chr = desc;
                // while(desc[i] != " ")

                pic_container.innerHTML += (`<img src="${imgLink}" alt="${desc}" id="img_${i + 1}">`);
                pic_container.style.background = "black";
            }
            output1.style.display = "flex";

        })
        .catch(e => {
            console.log("The error is", e);
            alert("Sorry no results found...Please try again!");
            // f2 = false;
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

let flag = false;
let img_n;
let photo;
pic_container.addEventListener("click", (e) => {
    let bt = e.target;
    console.log(bt.id);
    img_n = document.querySelector(`#${bt.id}`);

    console.log(img_n.currentSrc);
    photo = loadImage(img_n.currentSrc);
    flag = true;
    output1.style.display = "none";
    output2.style.display = "flex";




})
let flag2 = false;
let vf = true;
let video;
let myCanvas;
// let myCanvas2;
function setup() {
    myCanvas = createCanvas(450, 450);
    myCanvas.parent(canvas);
    //myCanvas.parent(canvas2);
    background(220, 0, 0);
    // myCanvas2 = createCanvas(400, 400);
    // myCanvas2.parent(canvas2);
    // background(0, 0, 220);
    // video = createCapture(VIDEO);
    // video.size(50, 50);



}

function draw() {

    if (flag) {
        // myCanvas.parent(canvas);
        // console.log("all okay");
        // photo = loadImage(img_n.currentSrc);
        // image(photo, 0, 0, width, height);

        photo.resize(80, 80);
        background(0);
        // image(photo, 0, 0, width, height);
        let r, g, b, bright;
        photo.loadPixels();
        let w = width / photo.width;
        let h = height / photo.height;

        // chr = "apple";
        // console.log(chr.length);
        k = 0;
        for (let i = 0; i < photo.width; i++) {
            for (let j = 0; j < photo.height; j++) {
                pixelI = (j + i * photo.width) * 4;
                r = photo.pixels[pixelI + 0];
                g = photo.pixels[pixelI + 1];
                b = photo.pixels[pixelI + 2];
                bright = (r + g + b) / 3;

                noStroke();
                fill(bright);
                //square(i*w, j*h, w);
                textSize(w);
                textAlign("CENTER", "CENTER");
                //text(chr[k], i*w + w*0.5, j*h +h*0.5);
                text(chr[k], j * h + h * 0.5, i * w + w * 0.5);
                if (k <= chr.length - 2) {
                    k++;
                }
                else {
                    k = 0;
                }
            }

        }

    }
    //addition
    if (flag2) {
        if (vf) {
            video = createCapture(VIDEO);
            video.size(80, 80);
            video.hide();
            vf = false;
        }
        background(0);
        let r, g, b, bright;
        //image(pic,0,0, width, height );

        video.loadPixels();
        let w = width / video.width;
        let h = height / video.height;

        let chr1 = "ME!";
        //console.log(chr.length);
        k = 0;
        for (let i = 0; i < video.width; i++) {
            for (let j = 0; j < video.height; j++) {
                pixelI = (j + i * video.width) * 4;
                r = video.pixels[pixelI + 0];
                g = video.pixels[pixelI + 1];
                b = video.pixels[pixelI + 2];
                bright = (r + g + b) / 3;

                noStroke();
                fill(bright);
                //square(i*w, j*h, w);
                textSize(w);
                textAlign("CENTER", "CENTER");
                //text(chr[k], i*w + w*0.5, j*h +h*0.5);
                text(chr1[k], j * h + h * 0.5, i * w + w * 0.5);
                if (k <= chr1.length - 2) {
                    k++;
                }
                else {
                    k = 0;
                }


            }
        }
    }


    //myCanvas2.background(220, 220, 0);
}



back_bt2.addEventListener("click", () => {
    output2.style.display = "none";
    if (flag) {

        output1.style.display = "flex";
        flag = false;
    }
    if (flag2) {
        init_input.style.display = "flex";
        flag2 = false;
        video.remove();
    }
})

takepic_bt.addEventListener("click", () => {
    init_input.style.display = "none";
    output2.style.display = "flex";
    flag2 = true;
    vf = true;

})

back_bt3.addEventListener("click", () => {
    input2.style.display = "none";
    init_input.style.display = "flex";

})

import_img.addEventListener("click", () => {
    init_input.style.display = "none";
    input4.style.display = "flex";
})

form_fin.addEventListener("submit", (e) => {
    e.preventDefault();
    let img_link2 = file_upload.value;
    input4.innerHTML += `<img src="${img_link2}" alt="">`;
})
let count = 1;
save_bt.addEventListener("click", () => {
    saveCanvas(`${count}`, 'jpg');
    count++;
})

back_bt4.addEventListener("click", () => {
    input4.style.display = "none";
    init_input.style.display = "flex";
})
//part 2

// p1.addEventListener("mouseover", () => {
//     p1.style.display = "none";
//     p_1.style.display = "block";
// })