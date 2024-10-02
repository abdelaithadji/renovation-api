// src/models/project.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Project = db.define('Project', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estimated_budget: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    entrepreneur_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Projects', // Assurez-vous d'utiliser le nouveau nom de table 'Projects'
    timestamps: true
});

module.exports = Project;
