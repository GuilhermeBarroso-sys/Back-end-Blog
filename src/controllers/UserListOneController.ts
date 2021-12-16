import {Request,Response} from 'express';
import { UserListOneService } from '../services/UserListOneService';

class UserListOneController {
  async handle(request : Request, response : Response) {
    const { id } = request.params;
    const userListOneService = new UserListOneService();
    try {
      const user = await userListOneService.execute(id);
      return response.status(200).json(user);
    }catch({message}) {
      return response.status(404).json(message)
    }
  }
}
export { UserListOneController }