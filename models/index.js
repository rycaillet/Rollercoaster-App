const moongoose = require('mongoose')

const Rollercoaster = require ('./rollercoaster')
const Guests = require('./guests')

const Rollercoaster = moongoose.model('Rollercoaster', Rollercoaster)
const Guests = moongoose.model('Guests', guestSchema)

module.exports = {
    Rollercoaster,
    Guests
}