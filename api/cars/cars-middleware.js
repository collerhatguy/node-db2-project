const { getById, checkVin } = require("./cars-model")
const vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params
  getById(id).then(car => {
    if (car) {
      req.car = car
      next()
    }
    next({ status: 404, message: `car with id ${id} is not found` })
  })
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const requiredKey = ["id", "vin", "make", "model", "mileage"]
  requiredKey.forEach(key => {
    if (!req.body[key]) next({ status: 400, message: `${key} is missing` })
  })
  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body
  const vinValidity = vinValidator(vin)
  vinValidity ? next() : next({ status: 400, message: `vin ${vin} is invalid` })
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body
  checkVin(vin).then(exists => {
    if (exists) {
      next({ status: 400, message: `vin ${vin} already exists` })
    }
    next()
  })
}

module.exports = { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid }
