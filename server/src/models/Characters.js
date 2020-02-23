
module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('Character', {
        name: DataTypes.STRING,
        characterImageUrl: DataTypes.STRING
    })

    return Character
}
