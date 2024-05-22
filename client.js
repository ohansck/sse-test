const eventSource = new EventSource('http://booklib2-857942702.us-east-1.elb.amazonaws.com:8000/sse')
//const eventSource = new EventSource('http://localhost:8000/sse')
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