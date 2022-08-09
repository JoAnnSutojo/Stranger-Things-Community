// node modules import
import { Router } from 'express';

// custom modules import
import { validateToken } from '../middlewares/validateToken.js';
import { 
    createStory, 
    deleteStory, 
    getStories, 
    likeStory, 
    updateStory 
} from '../contollers/storyControllers.js'

const router = Router();

router.get('/getstories', getStories);
router.post('/createstory', validateToken, createStory);
router.put('/updatestory/:id', validateToken, updateStory);
router. delete('/deletestory/:id', validateToken, deleteStory);
router.put('/likestory/:id', validateToken, likeStory)

export default router;