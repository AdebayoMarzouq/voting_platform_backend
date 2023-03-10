module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("user", {
        user_id: {
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        user_email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            uniqueKey: true,
        },
        user_department: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        user_level: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        vote_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            allowNull: false,
        },
    })
    users.associate = (models) => {
        users.hasMany(models.vote, {
            foreignKey: "user_id",
            onDelete: "CASCADE",
        })
    }
    return users
}
