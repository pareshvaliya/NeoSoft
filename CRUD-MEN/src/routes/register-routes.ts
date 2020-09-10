import express ,{Router} from 'express';
import * as RegisterController from '../controller/registercontroller';
const router:Router = express.Router();


router.get('/',RegisterController.getView);

router.get('/getall',RegisterController.getAll);

router.get('/getbyid/:id',RegisterController.getById);

router.post('/',RegisterController.saveUser);

router.put('/update',RegisterController.updateUser);

router.delete('/delete/:id',RegisterController.deleteUser);





export {router}
