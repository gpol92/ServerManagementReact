require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const serversRoute = require('./routes/servers');

const app = express()

app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use('/api/servers', serversRoute);

mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log("Connected to db & running on port", process.env.PORT);
        })
    })
    .catch((error) => {
        console.error(error)
    })
