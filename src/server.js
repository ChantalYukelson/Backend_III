// src/server.js
import app from './app.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar documentación Swagger desde /docs
const swaggerDocument = YAML.load(path.join(__dirname, 'docs/swagger.yaml'));

// Middleware para la doc
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Inicializar servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
