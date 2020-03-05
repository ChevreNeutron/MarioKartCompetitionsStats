module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
        gamenumber: DataTypes.STRING,
        firstplace: DataTypes.STRING,
        secondplace: DataTypes.STRING,
        thirdplace: DataTypes.STRING,
        fourthplace: DataTypes.STRING,
        firstchar: DataTypes.STRING,
        secondchar: DataTypes.STRING,
        thirdchar: DataTypes.STRING,
        fourthchar: DataTypes.STRING,
    })

    return Game
}
