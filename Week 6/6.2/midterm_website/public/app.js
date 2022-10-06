window.addEventListener("load", () => {


    let input = document.getElementById("class-input");
    input.addEventListener("submit", (e) => {
        e.preventDefault();
        let courseName = document.getElementById("class-input-text").value;
        console.log(courseName);
        let url = "/midterms?course=" + courseName; //doesn't see anything after /midterms - so we need to filter in the server side
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    })

})