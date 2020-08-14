import { Router } from 'express';
import { TypeIdentificationControllers } from '../controllers/type.identification.controllers';

const router = Router();

router.post('/type/identification', TypeIdentificationControllers.create);
router.get('/type/identification/:id', TypeIdentificationControllers.read);
router.get('/type/identification_all', TypeIdentificationControllers.readAll);
router.put('/type/identification/:id', TypeIdentificationControllers.update);

export default router;