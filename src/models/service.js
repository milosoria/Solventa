"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate(models) {
        // define association here}
    };
    service.init({
        name: DataTypes.STRING,
        rating: DataTypes.FLOAT,
        installedCapacity: DataTypes.FLOAT,
        price: DataTypes.INTEGER,
        brand: DataTypes.STRING,
        photo: DataTypes.STRING,
        maxReturn: DataTypes.INTEGER,
        minReturn: DataTypes.INTEGER,
        maxYearly: DataTypes.INTEGER,
        minYearly: DataTypes.INTEGER,
        spaceAvailable: DataTypes.INTEGER,
        gasReduction: DataTypes.FLOAT,
        productLifetime: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: 'service',
    });
    return service;
};
