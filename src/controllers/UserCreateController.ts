import { Request, Response } from "express";
import { UserCreateService } from "../services/UserCreateService";

class UserCreateController {
  async handle(request : Request, response: Response) {
    const {name,email,password} = request.body;
    const userCreateService = new UserCreateService();
    try {
      const user = await userCreateService.execute({name, email, password})
      return response.status(200).json(user);
    } catch({message}) {
      if(message === "400") {
        return response.status(400).json(message);
      }
      return response.status(409).json(message);
    }
  }
}

export { UserCreateController }