import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/mocks', mocksRouter);

// Conexión a MongoDB
const MONGO_URI = 'mongodb://localhost:27017/mockingEntrega'; // Cambialo si usás Atlas o cluster remoto

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error);
});
