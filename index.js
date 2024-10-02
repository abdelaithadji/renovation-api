const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models'); // Assurez-vous que ce chemin est correct
const clientRoutes = require('./routes/clients');
const entrepreneurRoutes = require('./routes/entrepreneurs');
const projectRoutes = require('./routes/projects'); // Assurez-vous que ce chemin est correct

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/clients', clientRoutes);
app.use('/entrepreneurs', entrepreneurRoutes);
app.use('/projects', projectRoutes); // Ajoutez votre route pour les projets ici

// Synchronisation de la base de données
db.sequelize.sync().then(() => {
    console.log("Database connected and synchronized");
}).catch(error => {
    console.error("Error syncing database:", error);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
