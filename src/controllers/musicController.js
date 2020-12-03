const music = require('../model/music.json')
const fs = require('fs')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(music)
}

const getById = (req, res) => {
    const id = req.params.id
 
const musicFound = music.find((musica) => musica.id == id) 
if(!musicFound){
    return res.status(500).send('erro aqui quiridan')
}
return res.status(200).send(musicFound)
}

module.exports = {
    getAll,
    getById
}