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
const canvas = document.querySelector("#canvas");
const output2 = document.querySelector(".output2");

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
            console.log(data.results[0].urls.small);
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

let flag = false;
let img_n;
pic_container.addEventListener("click", (e) => {
    let bt = e.target;
    console.log(bt.id);
    img_n = document.querySelector(`#${bt.id}`);
    flag = true;
    console.log(img_n.currentSrc);
    output1.style.display = "none";
    output2.style.display = "flex";



})
let photo;
// function preload() {
//     if (flag) {
//         photo = loadImage(img_n.currentSrc);
//     }
// }
function setup() {
    const myCanvas = createCanvas(400, 400);
    myCanvas.parent(canvas);
    background(220, 0, 0);

}

function draw() {
    if (flag) {
        console.log("all okay");
        photo = loadImage(img_n.currentSrc);
        image(photo, 0, 0, width, height);
        /*debugger;
        photo.resize(50, 50);
        background(255, 255, 255);
        // image(photo, 0, 0, width, height);
        let pixel, r, g, b, bright;
        photo.loadPixels();
        let w = width / photo.width;
        let h = height / photo.height;

        let chr = "dog";
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

        }*/
    }
}

// function createImage(URL) {
//     let photo;
//     // function preload() {


//     // }
//     console.log("yes1");
//     photo = loadImage(URL);
//     const myCanvas = createCanvas(400, 400);
//     myCanvas.parent(canvas);
//     background(220, 0, 0);

//     function setup() {
//         console.log("yes");
//         photo = loadImage(URL);
//         const myCanvas = createCanvas(400, 400);
//         myCanvas.parent(canvas);

//         photo.resize(50, 50);

//         background(0);
//         let pixel, r, g, b, bright;
//         //image(pic,0,0, width, height );

//         photo.loadPixels();
//         let w = width / photo.width;
//         let h = height / photo.height;

//         let chr = "dog";
//         // console.log(chr.length);
//         k = 0;
//         for (let i = 0; i < photo.width; i++) {
//             for (let j = 0; j < photo.height; j++) {
//                 pixelI = (j + i * photo.width) * 4;
//                 r = photo.pixels[pixelI + 0];
//                 g = photo.pixels[pixelI + 1];
//                 b = photo.pixels[pixelI + 2];
//                 bright = (r + g + b) / 3;

//                 noStroke();
//                 fill(bright);
//                 //square(i*w, j*h, w);
//                 textSize(w);
//                 textAlign("CENTER", "CENTER");
//                 //text(chr[k], i*w + w*0.5, j*h +h*0.5);
//                 text(chr[k], j * h + h * 0.5, i * w + w * 0.5);
//                 if (k <= chr.length - 2) {
//                     k++;
//                 }
//                 else {
//                     k = 0;
//                 }


//             }
//         }

//     }

// }

