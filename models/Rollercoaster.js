const { Schema } = require('mongoose')

const Rollercoaster = new Schema(
  {
    name: { type: String, required: true },
    Manufacturer: { type: String, required: true },
    Speed: { type: Number, required: true },
    Height: { type: String, required: true },
    Length: { type: Number, required: true },
    Inversions: { type: String, required: true },
    Duration: { type: String, required: true },
    Image: { type: String, required: true },
    HeightRequirement: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Rollercoaster
