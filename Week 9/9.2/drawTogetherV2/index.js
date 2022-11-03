let express = require("express");
let app = express();
app.use(express.json());
const PORT = 5000;


//creating an http server on the express app as we are working with sockets
let http = require("http");
let server = http.createServer(app); //creating http server on top of the express app


server.listen(PORT, () => {
    console.log("listening on port 5000");
})

app.use("/", express.static("public"));

//add sockets to the http server

let io = require("socket.io");
io = new io.Server(server);

// So we created an express app, created a http server over the express app, and then added socket.io to the http server

/* Information flow
Step 1 - Client initiates connection to the server
Step 2 - Server recognizes client connection and acknowledges it
Step 3 - Acknowledges on receiving confirmation of connection from the server
 */

//Public Space
let publicSockets = io.of("/publicSpace");

publicSockets.on("connect", (socket) => {
    console.log("New connection:", socket.id);

    //checking disconnection of the specific socket
    socket.on("disconnect", () => {
        console.log("Socket disconnected", socket.id);
    })

    //when server gets mouseData from client - data labels need to match
    socket.on("mouseData", (data) => {
        // console.log(data);
        publicSockets.emit("serverData", data); //emits back to all the clients 
        privateSockets.emit("serverData", data); //whatever is in the public space is also visible to the private space
    })

})

//Private Space

let privateSockets = io.of("/privateSpace");

privateSockets.on("connect", (socket) => {
    console.log("New connection:", socket.id);

    //when client sends request to join a room
    socket.on("roomJoin", (data) => {
        socket.roomName = data.name; //creating an attribute of name in the socket object
        socket.join(socket.roomName); //joins room
    })

    //checking disconnection of the specific socket
    socket.on("disconnect", () => {
        console.log("Socket disconnected", socket.id);
    })

    //when server gets mouseData from client - data labels need to match
    socket.on("mouseData", (data) => {
        // console.log(data);
        privateSockets.to(socket.roomName).emit("serverData", data); //emits back to all the clients 
    })

})

//each socket refers to the individual socket connection between a specific client and the server

/* Information flow for whiteboard
- Client sends mx,my data to server (.emit)
- Server on getting mousedata, emits to all clients
- Clients on getting mousedata fromt the server, draw on the canvas
*/



// Create two namespaces - public and private
// The drawings from the public space will be available to both spaces
// Within the private namespace we will make rooms and limit to 2 people

