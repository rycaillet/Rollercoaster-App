const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/rollercoasters', controllers.getAllRollercoasters)

router.get('/rollercoasters/:id', controllers.getRollercoasterById)

router.get('/guests', controllers.getAllGuests)

router.get('/guests/:id', controllers.getGuestById)

router.post('/rollercoasters', controllers.createRollercoaster)

router.post('/guests', controllers.createGuests)

router.delete('/rollercoaster/:id', controllers.deleteRollercoaster)

router.delete('/guests/:id', controllers.deleteGuests)

module.exports = router
