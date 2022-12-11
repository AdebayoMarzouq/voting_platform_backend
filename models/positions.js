module.exports = (sequelize, DataTypes) => {
    const positions = sequelize.define("position", {
        position_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        position_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    });
    positions.associate = (models) => {
        positions.hasMany(models.candidate, {
            foreignKey: "position_id",
        });
    };
    return positions;
};