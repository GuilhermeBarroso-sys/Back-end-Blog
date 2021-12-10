import { Request, Response } from "express";
import { UserCreateService } from "../services/UserCreateService";

class UserController {
  async create(request : Request, response: Response) {
    const {name,email,password,permission} = request.body;
    const userCreateService = new UserCreateService();
    try {
      const user = await userCreateService.execute({name, email, password, permission})
      return response.status(200).json(user);
    } catch(err) {
      return response.status(400).json(err.message);
    }
  }
}

export { UserController }