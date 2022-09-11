window.addEventListener('load', () => {
    console.log("page loaded");
})

let total_amt = 0;
let total_inc = 0;
let total_exp = 0;

// // const Form = document.getElementById("form");
// form.addEventListener("submit", (e) => {
//     let p = document.createElement("p");
//     p.innerText = document.querySelector("#enter_amt").value;
//     // alert()

// })

// const sub_button = document.querySelector("#submit");
const val = document.querySelector("#enter_amt");
const tbody = document.querySelector("#table_body");
const rd = document.getElementsByName("crdr");
const optionsCr = document.querySelector("#Category_cr")
const optionsDr = document.querySelector("#Category_dr")

rd[0].addEventListener("click", () => {
    document.querySelector("#dr_cat").style.display = "none";
    document.querySelector("#cr_cat").style.display = "block";
})

rd[1].addEventListener("click", () => {
    document.querySelector("#cr_cat").style.display = "none";
    document.querySelector("#dr_cat").style.display = "block";
})

form.addEventListener("submit", (e) => {
    e.preventDefault(); //to stop form submission

    // alert(val.value);

    let amt;
    let cat;
    if (rd[0].checked) {
        // credit = true;
        amt = val.value;
        total_inc += parseInt(val.value);
        cat = optionsCr.value


    }
    else {
        amt = ("-" + val.value);
        total_exp += parseInt(val.value);
        cat = optionsDr.value;

    }
    total_amt = total_inc - total_exp;
    document.querySelector("#cr_amt").innerText = total_inc;
    document.querySelector("#dr_amt").innerText = total_exp;
    let t_amt = document.querySelector(".container_amt p");
    t_amt.innerText = total_amt;
    if (total_amt > 0) {
        t_amt.style.color = "#66ff00";
    }
    else if (total_amt < 0) {
        t_amt.style.color = "#ff0511";
    }
    tbody.innerHTML += `<tr> <td> ${amt} </td> <td> ${cat} </td></tr>`; //add delete button here





})