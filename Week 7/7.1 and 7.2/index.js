let express = require("express");
let app = express();
const PORT = 3000;


app.listen(PORT, () => {
    console.log("Server running on port ", 3000);
})

app.use("/", express.static("public"));

