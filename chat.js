const socket = new WebSocket("ws://localhost:8080"); // Замените на адрес вашего сервера


function sendMessage() {
    let msgInput = document.getElementById("message");
    let msg = msgInput.value.trim();
    if (msg.length === 0) return;
    socket.send(msg);
    addMessage("Вы: " + msg);
    msgInput.value = "";
}

socket.onmessage = function(event) {
    addMessage("Собеседник: " + event.data);
};

socket.onerror = function(error) {
    addMessage("Ошибка WebSocket: " + error.message);
};

socket.onclose = function() {
    addMessage("Соединение с чатом закрыто.");
};

function addMessage(text) {
    let log = document.getElementById("chat-log");
    const newLocal = document.createElement("div");
    let div = newLocal;
    div.textContent = text;
log.appendChild(div);
}