// src/app.js
import express from 'express';
import adoptionRouter from './routes/adoption.router.js';
import usersRouter from './routes/users.router.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz para dar bienvenida o info
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Estuardo');
});

// Rutas principales
app.use('/api/adoptions', adoptionRouter);
app.use('/api/users', usersRouter);

// Ruta para cuando no se encuentra un endpoint
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error('Error interno:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

export default app;
