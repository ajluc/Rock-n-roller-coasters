const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Root'))

router.post('/rollercoasters', controllers.createRollercoaster)
router.get('/rollercoasters', controllers.getAllRollercoasters)
router.delete('/rollercoasters/:id', controllers.deleteRollercoaster)
router.get('/rollercoasters/:id', controllers.getRollercoasterById)

module.exports = router
