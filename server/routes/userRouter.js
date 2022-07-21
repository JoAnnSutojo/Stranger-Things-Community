// node modules import
import { Router } from 'express';

// custom modules import
import { signup, signin } from '../contollers/userControllers.js';

const router = Router();

/**
 * @method POST
 * @route /signup
 * @desc registration and get access token
 * @access Public
 */
router.post('/signup', signup);

/**
 * @method POST
 * @route /signin
 * @desc signing in and get access token
 * @access Public
 */
router.post('/signin', signin);

export default router;