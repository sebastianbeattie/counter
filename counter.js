const express = require('express');
const app = express();

var requestsSinceLast = 0;
var totalRequests = 0;

app.get("/", (req, res) => {
    requestsSinceLast++;
    res.send("OK");
});

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});

setInterval(() => {
    if (requestsSinceLast > 0) {
        console.log("Requests in the last second: " + requestsSinceLast);
        console.log("Requests in total: " + totalRequests);
    }
    totalRequests += requestsSinceLast;
    requestsSinceLast = 0;
}, 1000);