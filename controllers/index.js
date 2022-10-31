const { Rollercoaster, Guests } = require('../models')

const createRollercoaster = async (req, res) => {
  try {
    const rollercoaster = await new Rollercoaster(req.body)
    await rollercoaster.save()
    return res.json({ rollercoaster })
  } catch (error) {
    return res.json({ error: error.message })
  }
}

const createGuests = async (req, res) => {
  try {
    const guests = await new Guests(req.body)
    await guests.save()
    return res.json({ guests })
  } catch (error) {
    return res.json({ error: error.message })
  }
}

const getRollercoasterById = async (req, res) => {
  try {
    const rollercoaster = await Rollercoaster.findById(req.params.id)
    return res.json({ rollercoaster })
  } catch (error) {
    return res.send(error.message)
  }
}

const getGuestById = async (req, res) => {
  try {
    const guests = await Guests.findById(req.params.id)
    return res.json({ guests })
  } catch (error) {
    return res.send(error.message)
  }
}

const getAllRollercoasters = async (req, res) => {
  try {
    const rollercoaster = await Rollercoaster.find()
    return res.json({ rollercoaster })
  } catch (error) {
    return res.send(error.message)
  }
}

const getAllGuests = async (req, res) => {
  try {
    const guests = await Guests.find()
    return res.json({ guests })
  } catch (error) {
    return res.send(error.message)
  }
}

const deleteGuests = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Guests.findByIdAndDelete(id)
    if (deleted) {
      return res.send('Donut deleted')
    }
    throw new Error('Donut not found')
  } catch (error) {
    return res.send(error.message)
  }
}

const deleteRollercoaster = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Rollercoaster.findByIdAndDelete(id)
    if (deleted) {
      return res.send('Donut deleted')
    }
    throw new Error('Donut not found')
  } catch (error) {
    return res.send(error.message)
  }
}

module.exports = {
  createRollercoaster,
  createGuests,
  getRollercoasterById,
  getGuestById,
  getAllRollercoasters,
  getAllGuests,
  deleteGuests,
  deleteRollercoaster
}
