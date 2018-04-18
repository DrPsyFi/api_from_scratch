const model = require('./model')

const createSnacksController = (req, res, next) => {
  const { name, type } = req.body
  if (!name || !type) {
    return next ({ status: 400, message: "Snack 'name' and 'type' are required to create a snack"})
  }
  else {
    const newSnack = model.createSnack(name, type)
    res.status(201).json({data: newSnack})
  }
}

const getSnackController = (req,res, next) => {
  const snacks = model.getAll()
  res.json({data: snacks})
}

const getThisSnackController = (req, res, next) => {
  const id = req.params.id
  const snack = model.getThisSnack(id)

  if (!snack) return next({status: 404, message: `There is no snack with the id of: ${id}`})

  res.json({data: snack})
}

const updateSnackController = (req, res, next) => {
  let name = req.body.name
  let type = req.body.type
  const id = req.params.id
  const snack = model.updateSnack(id, name, type)

  if(!name || !type) return next({ status: 400, message:`To update a snack you need to provide 'name' and 'type'.`  })

  if (!snack) return next({status: 404, message: `There is not a snack with the id of: ${id}.`})

  res.status(200).json({data: snack})
}

const deleteSnackController = (req, res, next) => {
  const id = req.params.id
  const snack = model.deleteSnack(id)

  if(!snack) return next({ status: 404,  `There is not a snack with the id of: ${id}.`})

  res.status(204).json()
}

module.exports = {
  createSnacksController, getSnackController, getThisSnackController, updateSnackController, deleteSnackController
}
