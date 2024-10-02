const clientRoutes = require('./routes/clients');
const entrepreneurRoutes = require('./routes/entrepreneurs');
const projetRoutes = require('./routes/projects');

app.use('/clients', clientRoutes);
app.use('/entrepreneurs', entrepreneurRoutes);
app.use('/projects', projetRoutes);
