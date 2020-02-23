const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const CharactersController = require('./controllers/CharactersController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.get('/characters',
        CharactersController.getAllCharacters)
    
    app.post('/characters',
        CharactersController.post)
}
