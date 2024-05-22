const eventSource = new EventSource('http://localhost:8000')

updateMessage = (message) => {
    const list = document.getElementById('messages');
    const item = document.createElement('p');
    item.textContent = message;
    list.appendChild(item);
}

eventSource.onmessage = function (event) {
    updateMessage(event.data)
};

eventSource.onerror = function (event) {
    updateMessage('Connection closed');
    eventSource.close();
};