const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
    console.log('Health check')
    res.send('Hello World');
});
app.get('/sse', (req, res) => {
    console.log('New connection started');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const intervalId = setInterval(() => {

        const newDate = new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'full',
            timeStyle: 'long',
        }).format(new Date());

        res.write(`data: ${newDate}\n\n`);
    }, 1000);

    res.on('close', () => {
        console.log('Connection closed');
        clearInterval(intervalId);
        res.end();
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})