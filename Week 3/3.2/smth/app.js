window.addEventListener("load", () => {
    console.log("Website Loaded");
    fetch("fruit_colors.json") //don't put semicolons
        .then(res => res.json())
        .then(data => {
            console.log(data);
            debugger; //pauses the code

        })
        .catch(e => {
            console.log(e);
        })

})

