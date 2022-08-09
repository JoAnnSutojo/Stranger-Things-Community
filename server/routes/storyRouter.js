import { Router } from 'express';
import { validateToken } from '../middlewares/validateToken.js';

const router = Router();

router.get('/getstories', );
router.post('/createstory', validateToken, );
router.put('/updatestory/:id', validateToken, );
router. delete('/deletestory/:id', validateToken, );
router.put('/likestroy/:id', validateToken, )

export default router;