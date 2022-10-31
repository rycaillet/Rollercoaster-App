const { Schema } = require('mongoose')

const Rollercoaster = new Schema(
  {
    Name: { type: String, required: true },
    Manufacturer: { type: String, required: true },
    Speed: { type: String, required: true },
    Height: { type: String, required: true },
    Length: { type: String, required: true },
    Inversions: { type: String, required: true },
    Duration: { type: String, required: true },
    Image: { type: String, required: true },
    HeightRequirement: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Rollercoaster
