const user_form = document.querySelector("#user-form");
const gender = document.getElementsByName("gender");
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
            })

    })
})