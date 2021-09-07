// DO YOUR MAGIC
const router = require("express").Router()
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware")
const { getAll, create } = require("./cars-model")

router.get("/", (req, res, next) => {
    getAll()
        .then(cars => 
            res.status(200).json(cars)
        ).catch(next)
})

router.get("/:id", checkCarId, (req, res) => {
    res.status(200).json(req.car)
})

router.post("/", checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
    create(req.body)
        .then(car => 
            res.status(201).json(car)
        ).catch(next)
})

module.exports = router