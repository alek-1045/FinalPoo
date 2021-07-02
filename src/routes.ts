import { Router } from 'express';
import UsuariosController from './controllers/UsuariosController';
import ModulosController from './controllers/ModulosController';
import ModusuariosController from './controllers/ModusuariosController';

const routes = Router();

routes.get('/usuarios', UsuariosController.index);
routes.post('/usuarios', UsuariosController.create);

routes.get('/modulos', ModulosController.index);
routes.post('/modulos', ModulosController.create);

routes.get('/modusuarios', ModusuariosController.index);
routes.post('/modusuarios', ModusuariosController.create);
routes.get('/modusuarios/:id',ModusuariosController.show);
routes.put('/modusuarios/:id', ModusuariosController.update);
routes.delete('/modusuarios/:id', ModusuariosController.delete);

export default routes;