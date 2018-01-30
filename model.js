const uuid = require('uuid/v4')
const snacks =[]

function createSnack(name, type) {
  const newSnack = { id: uuid(), name, type}
  return newSnack
}

function getAll() {
  return snacks;
}

function getThisSnack(id) {
  const snack = snacks.find((snack) =>
  return snack.id === id
  })
  return snack
}

function updateSnack(id, name, type) {
  const snack = snacks.find((snack) =>
  return snack.id === id
})

  if(!snack) {
    return null
}

  snack.name = name
  snack.type = type

  return snack
}

function deleteSnack(id) {
  const snack = snack.find(snack => snack.id === id)
  const index = snacks.indexOf(id)
  snacks.splice(index, 1)
  return snacks
}

module.exports = {
  createSnack, getAll, getThisSnack, updateSnack, deleteSnack
}
