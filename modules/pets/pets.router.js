const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')
const STORE = require('../../store')
const Queue = require('../queue/Queue')

const router = express.Router()

router.get('/', (req, res) => {
  // res.json(STORE.dogs)
  res.status(200).json(Pets.get());
  
})

router.delete('/', json, (req, res) => {
   
})

module.exports = router
