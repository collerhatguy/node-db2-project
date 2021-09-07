const db = require("../../data/db-config")

const getAll = () => {
  return db("cars")
}

const getById = (id) => {
  return getAll()
    .where({ id })
    .first()
}

const create = (car) => {
  return getAll()
    .insert(car)
    .then(([id]) => getById(id))
}

const checkVin = (vin) => {
  return getAll()
    .where({ vin })
    .first()
}

module.exports = { getAll, getById, create, checkVin }