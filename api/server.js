const express = require("express")
const carEndpoints = require("./cars/cars-router")

const server = express()

server.use(express.json())
server.use("/api/cars", carEndpoints)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

// DO YOUR MAGIC

module.exports = server
