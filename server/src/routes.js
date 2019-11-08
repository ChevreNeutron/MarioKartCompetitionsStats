const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationController.register)
}

//22min30