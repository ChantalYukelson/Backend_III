import { Router } from 'express';
import { generateMockPets, generateMockUsers } from '../utils/mockGenerator.js';
import bcrypt from 'bcrypt';
import UserModel from '../dao/models/user.model.js';
import PetModel from '../dao/models/pet.model.js';

const router = Router();

// GET /api/mocks/mockingpets
router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(100); // o la cantidad que quieras
  res.json({ status: 'success', payload: pets });
});

// GET /api/mocks/mockingusers
router.get('/mockingusers', async (req, res) => {
  const users = await generateMockUsers(50); // Genera 50 usuarios por defecto
  res.json({ status: 'success', payload: users });
});

// POST /api/mocks/generateData
router.post('/generateData', async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    // Generar y guardar usuarios
    const usersData = await generateMockUsers(users);
    await UserModel.insertMany(usersData);

    // Generar y guardar pets
    const petsData = generateMockPets(pets);
    await PetModel.insertMany(petsData);

    res.json({ status: 'success', message: `${users} users and ${pets} pets created.` });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

export default router;
