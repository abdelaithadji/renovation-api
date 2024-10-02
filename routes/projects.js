// src/routes/projects.js
const express = require('express');
const router = express.Router();
const { Project, Client, Entrepreneur } = require('../models');

// Route pour récupérer tous les projects
router.get('/', async (req, res) => {
    try {
        console.log("called");
        const projects = await Project.findAll({
            include: [Client, Entrepreneur] // Inclure les associations avec Client et Entrepreneur
        });
        res.json(projects);
    } catch (error) {
        console.error('Erreur lors de la récupération des projects :', error);
        res.status(500).json({ error: 'Erreur inconnue du serveur' });
    }
});

// Route pour récupérer un project spécifique par ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: { id },
            include: [Client, Entrepreneur]
        });

        if (!project) {
            return res.status(404).json({ error: 'project non trouvé' });
        }

        res.json(project);
    } catch (error) {
        console.error('Erreur lors de la récupération du project :', error);
        res.status(500).json({ error: 'Erreur inconnue du serveur' });
    }
});

// Route pour créer un nouveau project
router.post('/', async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project); // Renvoie le projet créé
    } catch (error) {
        console.error('Erreur lors de la création du projet :', error);
        res.status(500).json({ error: 'Erreur lors de la création du projet' });
    }
});

// Route pour mettre à jour un project existant
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await project.update(req.body, { where: { id } });
        if (updated) {
            const updatedproject = await project.findOne({ where: { id } });
            res.json(updatedproject);
        } else {
            res.status(404).json({ error: 'project non trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour du project :', error);
        res.status(500).json({ error: 'Erreur inconnue du serveur' });
    }
});

// Route pour supprimer un project par son ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Project.destroy({ where: { id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'project non trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression du project :', error);
        res.status(500).json({ error: 'Erreur inconnue du serveur' });
    }
});

module.exports = router;
