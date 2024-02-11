const S3rver = require('../models/Server')
const mongoose = require('mongoose')

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

module.exports = {
    createServer,
    getServers,
    getServer,
    deleteServer,
    updateServer
}