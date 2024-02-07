const express = require("express");
const app = express();
const PORT = 3000;

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/ServerList");

const S3rver = require('./models/Server')

app.use(express.json())
app.get("/getServers", async (req, res)=> {
    try {
        const servers = await S3rver.find()
        console.log(servers);
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.json(servers);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error");
    }
})

app.post("/addServer", async (req, res) => {
    try {
        const {nome, indirizzoIP, isOnline} = req.body;
        const server = {
            nome: nome,
            ip: indirizzoIP,
            isOnline: isOnline,
        }
        new S3rver(server);
    } catch (error) {
        console.error(error)
        res.status(500).send("Error", error)
    }
})

app.delete()
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})