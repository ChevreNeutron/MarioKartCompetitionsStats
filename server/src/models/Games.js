
module.exports = (sequelize, DataTypes) => {

    const Game = sequelize.define('Game', {

        gamenumber: TEXT,
        firstplace: TEXT,
        secondplace: TEXT,
        thirdplace: TEXT,
        fourthplace: TEXT,
        firstchar: TEXT,
        secondchar: TEXT,
        thirdchar: TEXT,
        fourthchar: TEXT,
    })

    return Game
}
