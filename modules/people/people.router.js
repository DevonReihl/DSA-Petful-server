const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(People.get());
})

router.post('/', json, (req, res) => {
  
  const newPerson = req.body.name
  People.enqueue(newPerson)
  res.status(201).json(People.enqueue)
})

module.exports = router
