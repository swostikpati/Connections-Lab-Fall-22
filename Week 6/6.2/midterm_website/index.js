let express = require("express");
let app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on port ", 3000);
})

app.use("/", express.static("public/"));
app.use("/about", express.static("public/about.html"));

// app.get("/", (req, res) => {
//     res.send("Yalla");
// })

app.get("/next", (req, res) => {
    res.send("No point of knowing as there is very less that you can do");
})

let midterms = {
    "cso": {
        "name": "Computer Systems Organisation",
        "date": "12-Oct-22"
    },
    "cn": {
        "name": "Computer Network",
        "date": "12-Oct-22"
    },
    "geps": {
        "name": "global economic political",
        "date": "13-Oct-22"
    }
}

//method of getting the query string
app.get("/midterms", (req, res) => {
    console.log(req.query);
    let k = req.query.course;
    if (midterms[k]) {
        res.json(midterms[k]);
    }
    else {
        res.json({ name: "error" }); //can also add res.error
    }


})

//another method of directly manipulating the url string
// : denotes a variable
app.get("/midterms/:course", (req, res) => {
    console.log(req.params);
    res.json(midterms[req.params.course]);

})

