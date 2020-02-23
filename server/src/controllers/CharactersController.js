const {Character} = require('../models')

module.exports = {
  async getAllCharacters (req, res) {
    try {
      const character = await Character.findAll({
        limit: 10
      })
      res.send(character)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the characters.'
      })
    }
  },
  async post (req, res) {
    try {
        const character = await Character.create(req.body)
        res.send(character)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the character.'
      })
    }
  }
}
