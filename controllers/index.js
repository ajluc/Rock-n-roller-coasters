const Rollercoaster = require('../models')

const createRollercoaster = async (req, res) => {
  try {
    const rollercoaster = await new Rollercoaster(req.body)
    await rollercoaster.save()
    return res.status(201).json({
      rollercoaster
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllRollercoasters = async (req, res) => {
  try {
    const rollercoasters = await Rollercoaster.find()
    return res.status(200).json(rollercoasters)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRollercoasterById = async (req, res) => {
  try {
    const { id } = req.params
    const rollercoaster = await Rollercoaster.findById(id)
    if (rollercoaster) {
      return res.status(200).json({ rollercoaster })
    }
    return res
      .status(404)
      .send('Rollercoaster with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRollercoaster = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Rollercoaster.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Rollercoaster deleted')
    }
    throw new Error('Rollercoaster not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createRollercoaster,
  getAllRollercoasters,
  getRollercoasterById,
  deleteRollercoaster
}
