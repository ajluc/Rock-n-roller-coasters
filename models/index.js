const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rollercoaster = new Schema(
  {
    name: { type: String, required: true },
    maxHeight: { type: Number, required: true },
    topSpeed: { type: Number, required: true },
    heightReq: { type: Number, required: true },
    duration: { type: Number, required: true },
    img: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Rollercoaster', Rollercoaster)
