const express = require('express');
const router = express.Router();
const { Client } = require('../models');

// Route pour créer un client
router.post('/', async (req, res) => {
    console.log('Received data:', req.body);
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (error) {
        console.error('Error creating client:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route pour récupérer tous les clients
router.get('/', async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        console.error('Error fetching clients:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route pour récupérer un client par ID
router.get('/:id', async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ error: 'Client not found' });
        }
    } catch (error) {
        console.error('Error fetching client:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route pour mettre à jour un client par ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Client.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedClient = await Client.findByPk(req.params.id);
            res.status(200).json(updatedClient);
        } else {
            res.status(404).json({ error: 'Client not found' });
        }
    } catch (error) {
        console.error('Error updating client:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route pour supprimer un client par ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Client.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send(); // Client supprimé
        } else {
            res.status(404).json({ error: 'Client not found' }); // Client non trouvé
        }
    } catch (error) {
        console.error('Error deleting client:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
