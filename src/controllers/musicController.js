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
    const {id, title ,duration ,launchYear,favorited, artists} = req.body
    music.push({id, title ,duration ,launchYear,favorited, artists})
    fs.writeFile('./src/model/music.json', JSON.stringify(music), 'utf8', function (err){
  if(err){
    return res.status(500).send('algo errado não está certo')
  }
  return res.status(200).send('musica adicionada')
})
}

const updateMusic = (req, res) => {
    
        const musicId= req.params.id
        const musicToUpdate = req.body 
      
        const musicFound = music.find(musica => musica.id == musicId)       
        const musicIndex = music.indexOf(musicFound) 

        if (musicIndex >= 0) { 
            music.splice(musicIndex, 1, musicToUpdate) 
        } else {
            res.status(404).send( "musica não achada" )
        }
        
        fs.writeFile('./src/model/music.json', JSON.stringify(music), 'utf8', function (err){
            if(err){
              return res.status(500).send('vixi kk')
            }
            return res.status(200).send('atualização')
          })
    } 

    const deleteMusic = (req, res) => {
        const musicId = req.params.id
        const musicFound = music.find(musica => musica.id == musicId) 
        const musicIndex = music.indexOf(musicFound) 

        if (musicIndex >= 0) { 
            music.splice(musicIndex, 1) 
        } else {
            res.status(404).send('erro aqui')
        }

        fs.writeFile("./src/model/music.json", JSON.stringify(music), 'utf8', function (err) { 
            if (err) {
                res.status(500).send('eita, ve o que rolou')
            } else {
                res.sendStatus(204)
            }
        })

    }

    const updateFavorite = (req, res) => {
        const musicId = req.params.id 
        const favorited = req.body.favorited 

        const musicToUpdate = music.find(musica => musica.id == musicId) 
        const musicIndex = music.indexOf(musicToUpdate) 

        if (musicIndex >= 0) { 
            musicToUpdate.favorited = favorited 
            music.splice(musicIndex, 1, musicToUpdate) 
        } else {
            res.status(404).send('achei não')
        }

        fs.writeFile("./src/model/music.json", JSON.stringify(music), 'utf8', function (err) { 
            if (err) {
                res.status(500).send('deu ruim')
            } else {
                console.log('tudo nos conformes')
                const musicaUpdated = music.find((musica) => musica.id == musicId) 
                res.status(200).send(musicaUpdated) 
            }
        })
    }

module.exports = {
    getAll,
    getById,
    create,
    updateMusic,
    deleteMusic,
    updateFavorite
}