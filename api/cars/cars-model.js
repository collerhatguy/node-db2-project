const db = require("../../data/db-config")

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars")
}

const getById = (id) => {
  // DO YOUR MAGIC
  return getAll()
    .where({ id })
    .first()
}

const create = (car) => {
  // DO YOUR MAGIC
  return getAll()
    .insert(car)
    .then(([id]) => getById(id))
}

module.exports = { getAll, getById, create }