import {  Router } from 'express';
import { saveEmail } from '../services/comming.service';
import { interceptor } from '../utils/iterceptor.';



const router = Router();

router.post('/save-email', interceptor, saveEmail);

export {  router }