const express = require('express');
const {
    createServer, getServers, getServer
} = require('../controllers/serverController')
const router = express.Router();

router.get('/', getServers);


router.get('/:id', getServer);

router.post('/', createServer); 

router.delete('/:id', (req, res) => {
    res.json({msg: "DELETE a server"})
})

router.patch('/:id', (req, res) => {
    res.json({msg: "UPDATE a server"})
})

module.exports = router;