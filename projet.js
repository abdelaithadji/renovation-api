'use strict';
module.exports = (sequelize, DataTypes) => {
  const Projet = sequelize.define('Projet', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    estimated_budget: DataTypes.DECIMAL(12, 2),
    client_id: { type: DataTypes.INTEGER, references: { model: 'Clients', key: 'id' } },
    entrepreneur_id: { type: DataTypes.INTEGER, references: { model: 'Entrepreneurs', key: 'id' } },
  }, {});
  Projet.associate = function(models) {
    Projet.belongsTo(models.Client, { foreignKey: 'client_id' });
    Projet.belongsTo(models.Entrepreneur, { foreignKey: 'entrepreneur_id' });
  };
  return Projet;
};

