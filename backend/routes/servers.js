const express = require('express');
const {
    createServer, getServers, getServer, deleteServer, updateServer
} = require('../controllers/serverController')
const router = express.Router();

router.get('/', getServers);

router.get('/:id', getServer);

router.post('/', createServer); 

router.delete('/:id', deleteServer)

router.patch('/:id', updateServer)

module.exports = router;