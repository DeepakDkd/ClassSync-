import { Router } from 'express';
import {  login, register } from '../controller/authController';
const router = Router();

router.route('/login').post(login);
router.route('/register').post(register);

export default router;