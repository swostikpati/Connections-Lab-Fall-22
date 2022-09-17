window.addEventListener("load", () => {
    console.log("page loaded")
})
let searchName;
const txt = document.querySelector("#search_box");
const pic = document.querySelector(".pictures");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //to stop form submission
    searchName = txt.value;

    fetch(`https://api.unsplash.com/search/photos?query=${searchName}&client_id=mZPw-CKK4QAA8-T1FUwHhgWwDuHiaeOBD7d8ToskRXg`)
        .then(res => res.json())
        .then(data => {
            let desc = data.results[0].alt_description
            console.log(desc);
            let imgLink = data.results[0].urls.thumb;
            pic.innerHTML += (`<img src="${imgLink}" alt="${desc}">`);

        })
        .catch(e => {
            console.log("The error is", e);
        })
})