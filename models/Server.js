const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    nome: String,
    indirizzoIP: String,
    isOnline: Boolean,
});

const S3rver = mongoose.model("Server", serverSchema);

module.exports = S3rver;