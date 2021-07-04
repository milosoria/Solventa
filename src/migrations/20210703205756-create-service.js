'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      installedCapacity: {
        type: Sequelize.FLOAT
      },
      price: {
        type: Sequelize.INTEGER
      },
      brand: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      providerPhoto: {
        type: Sequelize.STRING
      },
      maxReturn: {
        type: Sequelize.INTEGER
      },
      minReturn: {
        type: Sequelize.INTEGER
      },
      maxYearly: {
        type: Sequelize.INTEGER
      },
      minYearly: {
        type: Sequelize.INTEGER
      },
      spaceAvailable: {
        type: Sequelize.INTEGER
      },
      gasReduction: {
        type: Sequelize.FLOAT
      },
      productLifetime: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('services');
  }
};