import {Router} from 'express'
import { AuthenticateController } from './controllers/AuthenticateController';
import { UserCreateController } from './controllers/UserCreateController';
import { UserDestroyController } from './controllers/UserDestroyController';
import { UserListAllController } from './controllers/UserListAllController';
import { UserListOneController } from './controllers/UserListOneController';
import { UserUpdateController } from './controllers/UserUpdateController';
import { IsAuthenticated } from './middlewares/IsAuthenticated';
import { IsAuthorized } from './middlewares/isAuthorized';

const routes = Router();
/** User routes */
routes.post('/login', new AuthenticateController().handle)
routes.get('/users/:id', IsAuthenticated, new UserListOneController().handle)
routes.get('/users', IsAuthenticated, new UserListAllController().handle)
routes.post('/users' , new UserCreateController().handle);
routes.put('/users/:id', IsAuthenticated, new UserUpdateController().handle)
routes.delete('/users/:id', IsAuthenticated, IsAuthorized, new UserDestroyController().handle);

export { routes }