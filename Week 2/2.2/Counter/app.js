window.addEventListener('load', () => {
    console.log("page loaded");
}) //arrow function

let count = 0;

plus_bt.addEventListener("click", () => {
    count++;
    document.querySelector("#number").innerText = count;

})
minus_bt.addEventListener("click", () => {
    count--;
    document.querySelector("#number").innerText = count;

})
reset.addEventListener("click", () => {
    count = 0;
    document.querySelector("#number").innerText = count;

})