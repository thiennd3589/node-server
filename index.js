const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.send(Buffer.from("<h2>Test String</h2>"));
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
