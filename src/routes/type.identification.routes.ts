import { Router } from 'express';
import { TypeIdentificationControllers } from '../controllers/type.identification.controllers';

const ROUTER = Router();

ROUTER.post('/type/identification', TypeIdentificationControllers.create);
ROUTER.get('/type/identification/:id', TypeIdentificationControllers.read);
ROUTER.get('/type/identification/list/all', TypeIdentificationControllers.readAll);
ROUTER.put('/type/identification/:id', TypeIdentificationControllers.update);

export default ROUTER;