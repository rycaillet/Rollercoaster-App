const { Schema } = require('mongoose')

const guestSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = guestSchema
