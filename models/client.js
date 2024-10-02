'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associer Client à Project
      Client.hasMany(models.Project, { foreignKey: 'client_id', as: 'projects' });
    }
  }
  
  Client.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Client',
    }
  );
  
  return Client;
};
