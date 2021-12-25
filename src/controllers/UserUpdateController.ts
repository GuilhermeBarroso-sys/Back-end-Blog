import { Request, Response } from "express";
import { UserUpdateService } from "../services/UserUpdateService";

class UserUpdateController {
  async handle(request : Request, response : Response) {
    const {name,email} = request.body;
    const {id} = request.params;
    const userUpdateService = new UserUpdateService();
    try {
      const update = await userUpdateService.execute({id,name,email});
      return response.status(200).json(update);
    } catch({message}) {
      return response.status(400).json(message);
    }
  }
}

export {UserUpdateController}