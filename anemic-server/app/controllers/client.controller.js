const db = require("../models")
const Client = db.client

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "name can not be empty!" })
    return
  }
  const client = new Client({
    name: req.body.name,
    birthDate: req.body.birthdate,
    lastName: req.body.lastName,
    nationalId: req.body.nationalId,
    email: req.body.email,
    type: req.body.birthDate || "lead"
  })

  client
    .save(client)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while saving the user task.",
      })
    })
}

exports.findAll = (req, res) => {

  Client.find({})
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Catalog.",
        })
      })
}

exports.findLead = (req, res) => {

  Client.find({type: "lead" })
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Catalog.",
        })
      })
}

exports.findProspect = (req, res) => {

  Client.find({type: "prospect" })
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Catalog.",
        })
      })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Client.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Sale with id " + id })
      else res.send(data)
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Sale with id=" + id })
    })
}


exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    })
  }

  const id = req.params.id

  Client.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update client with id=${id}. Maybe client was not found!`,
        })
      } else res.send({ message: "client was updated successfully." })
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating client with id=" + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Client.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Client with id=${id}. Maybe Client was not found!`,
        })
      } else {
        res.send({
          message: "Client was deleted successfully!",
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Client with id=" + id,
      })
    })
}
