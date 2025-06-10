const socket = new WebSocket("ws://localhost:8080");

function sendMessage() {
    let msg = document.getElementById("message").value;
    socket.send(msg);
    document.getElementById("message").value = "";
}

socket.onmessage = function(event) {
    let chatBox = document.getElementById("chat-box");
    let newMessage = document.createElement("p");
    newMessage.textContent = event.data;
    chatBox.appendChild(newMessage);
};
