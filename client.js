'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {});
  Client.associate = function(models) {
    Client.hasMany(models.Projet, { foreignKey: 'client_id' });
  };
  return Client;
};

