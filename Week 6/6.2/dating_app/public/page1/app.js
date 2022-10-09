const user_form = document.querySelector("#user-form");
const gender = document.getElementsByName("gender");
const section2 = document.querySelector("#section2");
const match_page = document.querySelector(".match-page");
let u_id;
let url;
let random_no;

//mdn docs
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log();

window.addEventListener("load", () => {


    user_form.addEventListener("submit", (e) => {
        e.preventDefault();
        section2.style.display = "none";
        if (gender[0].checked) {
            console.log("Male");
            u_id = 1;
        }
        else {
            console.log("Female");
            u_id = 2;
        }
        random_no = getRandomInt(5);
        url = "/match?id=" + u_id + "&no=" + random_no;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                match_page.innerHTML = `<p>Meet ${data.name}, ${data.age}</p> <p>Loves ${data.hobbies[0]}, ${data.hobbies[1]}, ${data.hobbies[2]}</p> <p>Hit them up on:</p> <p>${data.ig}</p>` + match_page.innerHTML;
                match_page.style.display = "flex";
                back_bt.addEventListener("click", () => {
                    match_page.innerHTML = `<button id="back_bt">Unmatch</button>`;
                    match_page.style.display = "none";
                    section2.style.display = "block";
                })
            })
            .catch(e => {
                //catches errors and alerts the user
                console.log("Error fetching data");

            })


    })
})

