const { Schema } = require('mongoose')

const Rollercoaster = new Schema(
  {
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    speed: { type: String, required: true },
    height: { type: String, required: true },
    length: { type: String, required: true },
    inversions: { type: String, required: true },
    duration: { type: String, required: true },
    image: { type: String, required: true },
    heightRequirement: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Rollercoaster
