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

const create = (req, res) => {
    const {id, title ,duration ,launchYear,favorite, artists} = req.body
    music.push({id, title ,duration ,launchYear,favorite, artists})
    fs.writeFile('./src/model/music.json', JSON.stringify(music), 'utf8', function (err){
  if(err){
    return res.status(500).send('algo errado não está certo')
  }
  return res.status(200).send('musica adicionada')
})
}

module.exports = {
    getAll,
    getById,
    create
}