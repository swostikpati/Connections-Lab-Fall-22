let express = require("express");
let app = express();
const PORT = 3000;
const userJSON = require("./users.json");


app.listen(PORT, () => {
    console.log("Server running on port ", 3000);
})

app.use("/", express.static("public/page1/"));

app.get("/match", (req, res) => {
    console.log(req.query);
    let k = req.query.id;
    let rand_index = req.query.no;
    let g;
    if (k == "1") {
        g = "male"
    }
    else if (k == "2") {
        g = "female"
    }
    if (userJSON[g]) {
        res.json(userJSON[g][rand_index]);
    }
    else {
        res.json({ name: "error" }); //can also add res.error
    }
    // res.json(userJSON);
})