import { Router } from 'express';
import { getAdoptions, createAdoption } from '../controllers/adoption.controller.js';

const router = Router();

router.get('/', getAdoptions);
router.post('/', createAdoption);

export default router;
