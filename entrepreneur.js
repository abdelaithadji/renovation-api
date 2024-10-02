'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entrepreneur = sequelize.define('Entrepreneur', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone_number: DataTypes.STRING,
    company_name: DataTypes.STRING,
  }, {});
  Entrepreneur.associate = function(models) {
    Entrepreneur.hasMany(models.Projet, { foreignKey: 'entrepreneur_id' });
  };
  return Entrepreneur;
};

