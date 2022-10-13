let express = require("express");
let app = express();
app.use(express.json()); //add this to understand that it has to pass the info that it is getting in
const PORT = 3000;

let messages = [];

app.listen(PORT, () => {
    console.log("Server running on port ", 3000);
})

app.use("/", express.static("public"));

app.post("/message", (req, res) => {
    // console.log(req);
    // console.log(req.body);
    messages.push(req.body);
    console.log(messages);
    res.send({ "task": "successful" });
})

app.get("/messages", (req, res) => {
    res.json({
        "msgs": messages
    })
})
