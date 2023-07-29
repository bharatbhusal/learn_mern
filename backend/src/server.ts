import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
// const PORT = undefined

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT!, () => {
    console.log("Connected to port: " + PORT);
});