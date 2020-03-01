module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'mariokartcompetitionstats',
        user: process.env.DB_USER || 'mariokartcompetitionstats',
        password: process.env.DB_PASS || 'mariokartcompetitionstats',
        options: {
            dialect: process.env.DIALECT ||'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './mariokartcompetitionstats.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
