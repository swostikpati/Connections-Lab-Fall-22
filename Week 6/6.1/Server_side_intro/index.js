let express = require("express");

let app = express();

app.get("/", (req, res) => {
    res.send("Hello heyyyy");
})

app.get("/apples", (req, res) => {
    res.json({
        "apples": 20
    })
})

app.listen(3000, () => {
    console.log("app is running");
})