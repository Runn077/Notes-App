module.exports=(sequelize, DataTypes) => {
    const Notes = sequelize.define("Notes", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postBody: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });
    return Notes;
}