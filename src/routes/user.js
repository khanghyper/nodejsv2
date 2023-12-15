import express from 'express';
import { getHomePage } from '../controllers/user.js';

const router = express.Router();

router.get('/', getHomePage)

router.get('/user', (req, res) => {
    return res.send('<h1>User page</h1>');
})

export default router;