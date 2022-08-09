// node modules import
import { Router } from'express';

// custom modules import
import { validateToken } from '../middlewares/validateToken.js';
import {
    getPosts, 
    addPost, 
    editPost, 
    removePost, 
    likePost 
} from '../contollers/postMessageControllers.js';

const router = Router();

router.get('/getposts', validateToken, getPosts);
router.post('/addpost', validateToken, addPost);
router.put('/editpost/:id', validateToken, editPost);
router. delete('/removepost/:id', validateToken, removePost);
router.put('/likepost/:id', validateToken, likePost)

export default router;

