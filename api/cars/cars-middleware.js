const { getById } = require("./cars-model")

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params
  getById(id).then(car => {
    if (car) {
      res.car = car
      next()
    }
    next({ status: 404, message: `car with id ${id} is not found` })
  })
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
