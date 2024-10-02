'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    estimated_budget: DataTypes.DECIMAL(12, 2),
    client_id: { type: DataTypes.INTEGER, references: { model: 'Clients', key: 'id' } },
    entrepreneur_id: { type: DataTypes.INTEGER, references: { model: 'Entrepreneurs', key: 'id' } },
  }, {});

  Project.associate = function(models) {
    Project.belongsTo(models.Client, { foreignKey: 'client_id' });
    Project.belongsTo(models.Entrepreneur, { foreignKey: 'entrepreneur_id' });
  };
  
  return Project;
};
