import {Router} from 'express'
import { AuthenticateController } from './controllers/AuthenticateController';
import { UserCreateController } from './controllers/UserCreateController';
import { UserDestroyController } from './controllers/UserDestroyController';
import { UserListAllController } from './controllers/UserListAllController';
import { UserListOneController } from './controllers/UserListOneController';
import { IsAuthenticated } from './middlewares/IsAuthenticated';
import { IsAuthorized } from './middlewares/isAuthorized';

const routes = Router();
/** User routes */
routes.post('/register' , new UserCreateController().handle);
routes.post('/login', new AuthenticateController().handle)
routes.get('/listOne/:id', IsAuthenticated, new UserListOneController().handle)
routes.get('/listAll', IsAuthenticated, new UserListAllController().handle)
routes.delete('/destroy/:id', IsAuthenticated, IsAuthorized, new UserDestroyController().handle);



export { routes }