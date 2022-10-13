let express = require("express");
let app = express();
app.use(express.json()); //add this to understand that it has to pass the info that it is getting in
const PORT = 3000;


let datastore = require("nedb");
let db = new datastore({ filename: "chats.db", timestampData: true });

db.loadDatabase();
let messages = [];

app.listen(PORT, () => {
    console.log("Server running on port ", 3000);
})

app.use("/", express.static("public"));

app.post("/message", (req, res) => {
    // console.log(req);
    // console.log(req.body);
    // messages.push(req.body);
    db.insert(req.body, (err, newDoc) => {
        if (err) {
            res.send({ "task": "unsuccessful" })
        } else {
            res.send({ "task": "successful" })
        }
    })
    // console.log(messages);
    // res.send({ "task": "successful" });
})



app.get("/messages", (req, res) => {
    db.find({}).sort({ createdAt: 1 }).exec((err, docs) => {
        // console.log(docs);//all docs
        if (err) {
            res.send({ "task": "unsuccessful" })
        } else {
            res.json({
                "msgs": docs
            })
        }

    });
    // res.json({
    //     "msgs": messages
    // })
})
