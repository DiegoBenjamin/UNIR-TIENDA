// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Importar rutas
const userRoutes = require('./routes/users');

app.use(express.json());
app.use('/api/users', userRoutes);

// Ruta de prueba en "/"
app.get('/', (req, res) => {
  res.send('🚀 Bienvenido a la API REST con SQL Server');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});