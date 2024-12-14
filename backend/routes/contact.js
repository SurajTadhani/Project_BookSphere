import express from 'express';
import { createContact } from '../controller/contactController.js'; // Adjust the path as necessary

const router = express.Router();

router.post('/contact', createContact);

export default router;