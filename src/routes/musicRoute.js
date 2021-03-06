const express = require("express")
const router = express.Router()
const controller = require("../controllers/musicController")
 
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.updateMusic)
router.delete('/:id', controller.deleteMusic)
router.patch('/:id/favorited', controller.updateFavorite)





module.exports = router