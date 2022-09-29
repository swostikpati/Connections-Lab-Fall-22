window.addEventListener("load", () => {
    console.log("page loaded"); // Reports that the page is loaded
})

//Selecting all the required DOM elements
const txt = document.querySelector("#search_box");
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

let chr; //consists of the string that is displayed over the text-image
let searchName; //the keyword the user searched for

//Event listener for submitting the searching images form
form.addEventListener("submit", (e) => {
    e.preventDefault(); //to stop form from reloading the page
    searchName = txt.value; //getting the searched term
    chr = searchName;

    //sending GET request to the Unsplash API
    fetch(`https://api.unsplash.com/search/photos?query=${searchName}&client_id=mZPw-CKK4QAA8-T1FUwHhgWwDuHiaeOBD7d8ToskRXg`)
        .then(res => res.json()) //sends promise if it exists
        .then(data => {

            let desc; //stores the alternate description
            let imgLink; //stores the image link
            console.log(data.results[0].urls.small); //very useful in order to trigger catch which stops the displayed views from changing

            input2.style.display = "none"; //changing the current display

            //Loading the images and adding them to the div with their desctiption and ids
            for (let i = 0; i < 6; i++) {
                imgLink = data.results[i].urls.small;
                desc = data.results[i].alt_description;
                pic_container.innerHTML += (`<img src="${imgLink}" alt="${desc}" id="img_${i + 1}">`);
                pic_container.style.background = "black";
            }
            //viewing the new display screen with the images
            output1.style.display = "flex";

        })
        .catch(e => {
            //catches errors and alerts the user
            console.log("The error is", e);
            alert("Sorry no results found...Please try again!");
        })
})

//transitions to the next screen on button click
unsplash.addEventListener("click", () => {
    init_input.style.display = "none";
    input2.style.display = "flex";


})

//animation transition from the cover page to the initial input screen
cover_p.addEventListener("click", () => {
    cover_p.style.display = "none";
    init_input.style.display = "flex";
    io_box.style.width = "800px";
    io_box.style.height = "550px";

})

//reverting back to the previous screen on button click
back_bt.addEventListener("click", () => {
    output1.style.display = "none";
    input2.style.display = "flex";
    pic_container.innerHTML = "";
    console.log("pressed");
})

let flag = false; //used for transitioning between different info displayed in the p5 canvas using a single canvas
let img_n; //denoted the img number
let photo; //variable to store the loaded image

//Selecting an image
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

//decalring and initializing some flags and variables
let flag2 = false;
let vf = true;
let video;
let myCanvas;

//p5 canvas setup
function setup() {
    myCanvas = createCanvas(450, 450);
    myCanvas.parent(canvas);
    background(220, 0, 0); //just testing if canvas works
}

//p5 canvas draw
function draw() {

    //runs when picture is selected from unsplash
    if (flag) {

        photo.resize(80, 80); //resizes photo to 80 x 80 pixels
        background(0); //setting canvas background to black
        let r, g, b, bright;

        //obtaining height and width of every pixel
        photo.loadPixels();
        let w = width / photo.width;
        let h = height / photo.height;

        k = 0;

        //traversing through every pixel of the photo 
        for (let i = 0; i < photo.width; i++) {
            for (let j = 0; j < photo.height; j++) {
                pixelI = (j + i * photo.width) * 4;

                //obtaining the rgb values of the pixel
                r = photo.pixels[pixelI + 0];
                g = photo.pixels[pixelI + 1];
                b = photo.pixels[pixelI + 2];

                //computing the grayscale value of the pixel by averaging the rgb values
                bright = (r + g + b) / 3;

                //printing a single character from the character string at the center of the pixel square with the grayscale color obtained
                noStroke();
                fill(bright);
                textSize(w);
                textAlign("CENTER", "CENTER");
                text(chr[k], j * h + h * 0.5, i * w + w * 0.5);

                //traversing through the character string
                if (k <= chr.length - 2) {
                    k++;
                }
                else {
                    k = 0;
                }
            }

        }

    }

    //runs when user wants to capture live video feed from webcam
    if (flag2) {
        //preventing multiple video renders by using flag
        if (vf) {
            video = createCapture(VIDEO);
            video.size(80, 80);
            video.hide(); //hides the video preview
            vf = false;
        }

        //following the same steps as above on the video
        background(0);
        let r, g, b, bright;

        video.loadPixels();
        let w = width / video.width;
        let h = height / video.height;

        let chr1 = "ME!";
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
                textSize(w);
                textAlign("CENTER", "CENTER");
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
}


//adding events of changing views to different buttons
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
