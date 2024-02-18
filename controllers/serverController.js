const S3rver = require('../models/Server')
const mongoose = require('mongoose')
const ping = require('ping')

const getServers = async (req, res) => {
    const servers = await S3rver.find({}).sort({nome: -1})
    res.status(200).json(servers)
}

const getServer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such server"})
    }
    
    const server = await S3rver.findById(id)
    
    if (!server) {
        return res.status(404).json({error: "No such server"})
    }
    res.status(200).json(server)
}

const createServer = async (req, res) => {
    const {nome, indirizzoIP, isOnline} = req.body;
    try {
        const server = await S3rver.create({nome, indirizzoIP, isOnline})
        res.status(200).json(server);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteServer = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such server"})
    }

    const server = await S3rver.findOneAndDelete({_id: id})

    if (!server) {
        return res.status(400).json({error: "No such server"})
    }

    res.status(200).json(server);
}

const updateServer = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such server"})
    }

    const server = await S3rver.findOneAndUpdate({_id: id}, {...req.body})

    if (!server) {
        return res.status(400).json({error: "No such server"})
    }

    res.status(200).json(server);
}

const pingServers = async (req, res) => {
    try {
        const servers = await S3rver.find({});
        const pingPromises = servers.map(server =>
            ping.promise.probe(server.indirizzoIP)
        );

        const pingResults = await Promise.all(pingPromises);

        const serverStatus = pingResults.map((response, index) => ({
            "Server": servers[index].indirizzoIP,
            "Status": response.alive
        }));

        res.status(200).json({ "Servers": serverStatus });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
};

module.exports = {
    createServer,
    getServers,
    getServer,
    deleteServer,
    updateServer,
    pingServers
}