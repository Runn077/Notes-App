module.exports=(sequelize, DataTypes) => {
    const Notes = sequelize.define("Notes", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postBody: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    );
    Notes.associate = (models) => {
        Notes.belongsTo(models.Users, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });
    };
    return Notes;
}