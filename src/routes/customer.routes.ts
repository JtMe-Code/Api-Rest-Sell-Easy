import { Router } from 'express';

const router = Router();

router.get('/customer', (req, res)=>{
    res.json({hola: "mundo"})
});

export default router;