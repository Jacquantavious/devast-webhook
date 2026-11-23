const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.post("/devast", function (req, res) {
    console.log(JSON.stringify(req.body));

    res.json({
        type: "commands",
        content: [
            "!item-all=wood",
            "!item-all=workbench"
        ]
    });
});

app.get("/", function (req, res) {
    res.send("Webhook is online!");
});

app.use(function (req, res) {
    res.status(404).json({ error: "Not found" });
});

app.listen(PORT, "0.0.0.0", function () {
    console.log(`Webhook running on port ${PORT}`);
});
