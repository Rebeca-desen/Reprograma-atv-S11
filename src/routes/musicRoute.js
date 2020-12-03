const express = require("express")
const router = express.Router()
const controller = require("../controllers/musicController")
 
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/atualizar/:id', controller.updateMusic)





module.exports = router