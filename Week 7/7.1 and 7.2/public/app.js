window.addEventListener("load", () => {
    //get messages from server every two seconds
    setInterval(() => {
        refreshMsgs();
    }, 2000);

    let chatform = document.querySelector("#chat-form");
    chatform.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log("chat sent!");
        let chatName = document.querySelector("#chat-name").value;
        let chatMsg = document.querySelector("#chat-msg").value;
        console.log("chat sent!", chatName, chatMsg);

        let msgObj = {
            "name": chatName,
            "msg": chatMsg
        }

        let msgObjJSON = JSON.stringify(msgObj); //very important as only strings can be sent
        console.log(msgObjJSON);
        fetch('/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, //important to make the server side aware that the sent string is of type JSON
            body: msgObjJSON
        })
            //this is not the greatest method - only done here to show the use of another api
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refreshMsgs();
            }) //only required for receiving the confirmation from the server side
        //should have either used ASYNC AWAIT or sent the latest msg and then append it into the HTML


    })
})

let chatMsgs = document.querySelector("#chat-msgs");

function refreshMsgs() {
    //GET request from the API
    fetch('/messages')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            chatMsgs.innerHTML = "";
            let allChats = data.msgs;
            allChats.forEach((chat) => {
                chatMsgs.innerHTML += `<li>${chat.name} - ${chat.msg}</li>`
            })
            //clear out the HTML div that contains all the messages
            //add all the new messages that we have
        })
}

/* what happens on form submission?
1. get the value of what the user typed - DONE
2a. Sent message to the server - DONE
2b. store the message on server side 
3. display the chat message on screen

*/