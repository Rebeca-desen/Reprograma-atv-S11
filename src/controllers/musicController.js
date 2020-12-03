const music = require('../model/music.json')
const fs = require('fs')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(music)
}

module.exports = {
    getAll
}