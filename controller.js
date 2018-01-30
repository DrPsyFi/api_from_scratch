const model = require('./model')

const createSnacksController = (req, res, next) => {
  const { name , type } = req.body
  if (!name || !type) {
    return next({ status: 400, message: `Feild name and type are required to create item`})
  } else {
    const newSnack = model.createSnack(name, type)
    res.status(201).json({data: newSnack})
  }
}

const getSnackController = (req, res, next) => {
  const snacks = model.getAll()
  res.json({data : snacks })
}

const getThisSnackController = (req, res, next) => {
  const id = req.params.id
  const snack = model.getThisSnack(id)

  if (!snack) return next({ status: 404, message: `could not find snack with an id of:  ${id}`})

  res.json({ data: snack})
}

const updateSnackController = (req, res, next) => {
  let name = req.body.name
  let type = req.body.type
  const id = req.params.id

  if(!name || !type) return next({ status: 400, message: `Fields name and type are required`})

  const snack = model.updateSnack(id, name, type)
  if(!snack) return next({ status: 404, message: `could not find snack with an id of:  ${id}`})

  res.status(200).json({data: snack})
}

const deleteSnackController = (req, res, next) => {
  const id = req.params.id
  const snack = model.deleteSnack(id)

  if(!snack) return next({ status: 404, message: `could not find snack with an id of:  ${id}`})

  res.status(204).json()
}

module.exports = {
  createSnacksController, getSnackController, getThisSnackController, updateSnackController, deleteSnackController
}
