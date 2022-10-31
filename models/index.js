const moongoose = require('mongoose')

const RollercoasterSchema = require('./rollercoaster')
const GuestsSchema = require('./guests')

const Rollercoaster = moongoose.model('Rollercoaster', RollercoasterSchema)
const Guests = moongoose.model('Guests', GuestsSchema)

module.exports = {
  Rollercoaster,
  Guests
}
