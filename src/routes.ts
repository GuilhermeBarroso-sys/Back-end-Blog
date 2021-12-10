import {Router} from 'express'
import { AuthenticateController } from './controllers/AuthenticateController';
import { UserController } from './controllers/UserController';
import { IsAuthenticated } from './middlewares/IsAuthenticated';

const routes = Router();

routes.post('/register', IsAuthenticated , new UserController().create);
routes.post('/login', new AuthenticateController().login)
export { routes }