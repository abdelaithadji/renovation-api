const express = require('express');
const router = express.Router();
const { Entrepreneur } = require('../models');

// Route pour créer un entrepreneur
router.post('/', async (req, res) => {
    console.log('Received data:', req.body);
    try {
        const entrepreneur = await Entrepreneur.create(req.body);
        res.status(201).json(entrepreneur);
    } catch (error) {
        console.error('Error creating entrepreneur:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route pour récupérer tous les entrepreneurs
router.get('/', async (req, res) => {
    try {
        const entrepreneurs = await Entrepreneur.findAll();
        res.status(200).json(entrepreneurs);
    } catch (error) {
        console.error('Error fetching entrepreneurs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route pour récupérer un entrepreneur par ID
router.get('/:id', async (req, res) => {
    try {
        const entrepreneur = await Entrepreneur.findByPk(req.params.id);
        if (entrepreneur) {
            res.status(200).json(entrepreneur);
        } else {
            res.status(404).json({ error: 'Entrepreneur not found' });
        }
    } catch (error) {
        console.error('Error fetching entrepreneur:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route pour mettre à jour un entrepreneur par ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Entrepreneur.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedEntrepreneur = await Entrepreneur.findByPk(req.params.id);
            res.status(200).json(updatedEntrepreneur);
        } else {
            res.status(404).json({ error: 'Entrepreneur not found' });
        }
    } catch (error) {
        console.error('Error updating entrepreneur:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route pour supprimer un entrepreneur par ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Entrepreneur.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Entrepreneur not found' });
        }
    } catch (error) {
        console.error('Error deleting entrepreneur:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
