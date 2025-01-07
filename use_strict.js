const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.post("/get-time", (req, res) => {
    const now = new Date();
    res.json({
        time: now.toLocaleTimeString(),
        date: now.toLocaleDateString(),
    });
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
