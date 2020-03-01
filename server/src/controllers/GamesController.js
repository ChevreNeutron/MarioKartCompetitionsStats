const {Game} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const game = await Game.findAll({
        limit: 10
      })
      res.send(game)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the games.'
      })
    }
  },
  async post (req, res) {
    try {
        const game = await Game.create(req.body)
        res.send(game)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the game.'
      })
    }
  }
}
