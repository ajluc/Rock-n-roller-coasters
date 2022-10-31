const mongoose = require('mongoose')

let MONGODB_URI =
  'mongodb+srv://group9:1234@coasters.7uqivo5.mongodb.net/RollerCoasters'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
