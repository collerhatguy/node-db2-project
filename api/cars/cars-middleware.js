const { getById, checkVin } = require("./cars-model")
const vinValidator = require('vin-validator').validate;

const checkCarId = (req, res, next) => {
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
  const requiredKey = ["vin", "make", "model", "mileage"]
  requiredKey.forEach(key => {
    !req.body[key] && next({ status: 400, message: `${key} is missing` })
  })
  next()
}

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body
  const vinValidity = vinValidator(vin)
  vinValidity ? next() : next({ status: 400, message: `vin ${vin} is invalid` })
}

const checkVinNumberUnique = (req, res, next) => {
  const { vin } = req.body
  checkVin(vin).then(exists => {
    exists && next({ status: 400, message: `vin ${vin} already exists` })
    next()
  }).catch(next)
}

module.exports = { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid }
